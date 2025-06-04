// src/app/checkout/page.tsx
"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { CreditCard, AccountBalance } from "@mui/icons-material";

const states = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", 
  "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", 
  "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const planDetailsFallback = {
  basic: { 
    name: "Básico", 
    monthlyPrice: 50.00,                  
    annualTotalPrice: 45.00 * 12,         
    defaultMonthlyDisplay: 50.00,         
    defaultAnnualDisplayMonthly: 45.00    
  },
  vip: { 
    name: "Vip", 
    monthlyPrice: 70.00,                  
    annualTotalPrice: 50.00 * 12,         
    defaultMonthlyDisplay: 70.00,         
    defaultAnnualDisplayMonthly: 50.00    
  },
  premium: { 
    name: "Premium", 
    monthlyPrice: 100.00,                 
    annualTotalPrice: 80.00 * 12,         
    defaultMonthlyDisplay: 100.00,        
    defaultAnnualDisplayMonthly: 80.00   
  },
};

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const planTypeParam = searchParams.get("type") || "monthly"; 
  const planLevelParam = searchParams.get("level") || "vip";   
  const priceFromUrlParam = searchParams.get("price");         

  const planLevel = (planLevelParam && Object.keys(planDetailsFallback).includes(planLevelParam)) 
                    ? planLevelParam as keyof typeof planDetailsFallback 
                    : "vip"; 

  const planType = (planTypeParam === "monthly" || planTypeParam === "yearly")
                    ? planTypeParam
                    : "monthly"; 
  
  const fallbackInfo = planDetailsFallback[planLevel];

  let currentDisplayPrice: number;
  if (priceFromUrlParam) {
    const parsedPrice = parseFloat(priceFromUrlParam);
    if (!isNaN(parsedPrice) && parsedPrice > 0) {
      currentDisplayPrice = parsedPrice;
    } else {
      currentDisplayPrice = planType === "monthly" 
        ? fallbackInfo.defaultMonthlyDisplay 
        : fallbackInfo.defaultAnnualDisplayMonthly;
    }
  } else {
    currentDisplayPrice = planType === "monthly" 
      ? fallbackInfo.defaultMonthlyDisplay 
      : fallbackInfo.defaultAnnualDisplayMonthly;
  }

  const totalAmount = currentDisplayPrice; 

  let yearlyAmountForInstallments: number;
  if (planType === "yearly") {
    yearlyAmountForInstallments = totalAmount * 12;
  } else {
    yearlyAmountForInstallments = fallbackInfo.annualTotalPrice; 
  }

  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cpfCnpj: "",
  });

  const [address, setAddress] = useState({
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    cep: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    cardCpf: "",
    cardExpiry: dayjs().add(1, "year"),
    cardCvv: "",
  });

  const [installments, setInstallments] = useState(1);

  const MAX_INSTALLMENTS = 12;
  const MIN_INSTALLMENT_VALUE = 10;
  const installmentAmount = yearlyAmountForInstallments / installments;

  const fetchAddress = async (cep: string) => {
    const cleanedCEP = cep.replace(/\D/g, "");
    if (cleanedCEP.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanedCEP}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setAddress((prev) => ({
            ...prev,
            street: data.logradouro || "",
            neighborhood: data.bairro || "",
            city: data.localidade || "",
            state: data.uf || "",
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const formatPhone = (value: string) => {
    const nums = value.replace(/\D/g, "");
    if (nums.length <= 10) return nums.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    return nums.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const formatCEP = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2").slice(0, 9);
  };

  const formatCPF = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .slice(0, 14);
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  useEffect(() => {
    if (address.cep.length === 9 || address.cep.length === 8) {
      fetchAddress(address.cep);
    }
  }, [address.cep]);

  const handlePersonalDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPersonalData((prev) => ({ ...prev, [name]: formatPhone(value) }));
    } else if (name === "cpfCnpj") {
      setPersonalData((prev) => ({ ...prev, [name]: formatCPF(value) }));
    } else {
      setPersonalData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cep") {
      setAddress((prev) => ({ ...prev, [name]: formatCEP(value) }));
    } else {
      setAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCardDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      setCardData((prev) => ({ ...prev, [name]: formatCardNumber(value) }));
    } else if (name === "cardCpf") {
      setCardData((prev) => ({ ...prev, [name]: formatCPF(value) }));
    } else if (name === "cardCvv") {
      setCardData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "").slice(0, 4) }));
    } else {
      setCardData((prev) => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ 
      personalData,
      address,
      paymentMethod,
      cardData,
      plan: {
        type: planType,
        level: planLevel,
        installments,
        totalAmount 
      }
    });
    router.push("/success"); 
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        p: 4,
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 1 }}>
          Finalizar Assinatura
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#555" }}>
          Complete seus dados para assinar o plano
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, p: 3, mb: 4, border: "1px solid #eee" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#D33180" }}>
                Dados Pessoais
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}><TextField required fullWidth label="Nome Completo" name="fullName" value={personalData.fullName} onChange={handlePersonalDataChange} inputProps={{ autoComplete: 'name' }} /></Grid>
                <Grid item xs={12} sm={6}><TextField required fullWidth label="Email" type="email" name="email" value={personalData.email} onChange={handlePersonalDataChange} inputProps={{ autoComplete: 'email' }} /></Grid>
                <Grid item xs={12} sm={6}><TextField required fullWidth label="Telefone" name="phone" value={personalData.phone} onChange={handlePersonalDataChange} placeholder="(00) 00000-0000" inputProps={{ autoComplete: 'tel' }} /></Grid>
                <Grid item xs={12}><TextField required fullWidth label="CPF/CNPJ" name="cpfCnpj" value={personalData.cpfCnpj} onChange={handlePersonalDataChange} placeholder="000.000.000-00" inputProps={{ autoComplete: 'off' }} /></Grid>
              </Grid>
            </Box>

            <Box sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, p: 3, mb: 4, border: "1px solid #eee" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#D33180" }}>
                Endereço
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}><TextField required fullWidth label="CEP" name="cep" value={address.cep} onChange={handleAddressChange} placeholder="00000-000" inputProps={{ autoComplete: 'postal-code' }} /></Grid>
                <Grid item xs={12} sm={8}><TextField required fullWidth label="Endereço" name="street" value={address.street} onChange={handleAddressChange} inputProps={{ autoComplete: 'street-address' }} /></Grid>
                <Grid item xs={12} sm={4}><TextField required fullWidth label="Número" name="number" value={address.number} onChange={handleAddressChange} /></Grid>
                <Grid item xs={12} sm={8}><TextField fullWidth label="Complemento" name="complement" value={address.complement} onChange={handleAddressChange} inputProps={{ autoComplete: 'address-line2' }} /></Grid>
                <Grid item xs={12} sm={6}><TextField required fullWidth label="Bairro" name="neighborhood" value={address.neighborhood} onChange={handleAddressChange} inputProps={{ autoComplete: 'address-level3' }} /></Grid>
                <Grid item xs={12} sm={6}><TextField required fullWidth label="Cidade" name="city" value={address.city} onChange={handleAddressChange} inputProps={{ autoComplete: 'address-level2' }} /></Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Estado</InputLabel>
                    <Select label="Estado" name="state" value={address.state} onChange={(e) => setAddress((prev) => ({ ...prev, state: e.target.value }))} inputProps={{ autoComplete: 'address-level1' }}>
                      {states.map((state) => (<MenuItem key={state} value={state}>{state}</MenuItem>))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            
            <Box sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, p: 3, mb: 4, border: "1px solid #eee" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#D33180" }}>
                Forma de Pagamento
              </Typography>
              <Box sx={{ mb: 2 }}>
                <FormControlLabel 
                  control={<Checkbox checked={paymentMethod === "credit"} onChange={() => setPaymentMethod("credit")} icon={<CreditCard />} checkedIcon={<CreditCard sx={{ color: 'black' }} />}/>} 
                  label="Cartão de Crédito" 
                  sx={{ mr: 3, '& .MuiTypography-root': { color: 'black' } }} 
                />
                <FormControlLabel 
                  control={<Checkbox checked={paymentMethod === "debit"} onChange={() => setPaymentMethod("debit")} icon={<AccountBalance />} checkedIcon={<AccountBalance sx={{ color: 'black' }} />}/>} 
                  label="Cartão de Débito" 
                  sx={{ '& .MuiTypography-root': { color: 'black' } }}
                />
              </Box>
              {(paymentMethod === "credit" || paymentMethod === "debit") && ( 
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField 
                      required 
                      fullWidth 
                      label="Número do Cartão" 
                      name="cardNumber" 
                      value={cardData.cardNumber} 
                      onChange={handleCardDataChange} 
                      placeholder="0000 0000 0000 0000"
                      inputProps={{ autoComplete: 'cc-number' }} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                      required 
                      fullWidth 
                      label="Nome no Cartão" 
                      name="cardName" 
                      value={cardData.cardName} 
                      onChange={handleCardDataChange}
                      inputProps={{ autoComplete: 'cc-name' }} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      required 
                      fullWidth 
                      label="CPF do Titular" 
                      name="cardCpf" 
                      value={cardData.cardCpf} 
                      onChange={handleCardDataChange} 
                      placeholder="000.000.000-00"
                      inputProps={{ autoComplete: 'off' }} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                      <MobileDatePicker 
                        label="Validade" 
                        views={["month", "year"]} 
                        value={cardData.cardExpiry} 
                        onChange={(newValue) => setCardData((prev) => ({ ...prev, cardExpiry: newValue as any }))} 
                        format="MM/YY" 
                        minDate={dayjs()}
                        slotProps={{
                          textField: {
                            name: 'cardExpiry',
                            inputProps: {
                              autoComplete: 'cc-exp',
                            },
                            required: true
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField 
                      required 
                      fullWidth 
                      label="CVV" 
                      name="cardCvv" 
                      value={cardData.cardCvv} 
                      onChange={handleCardDataChange} 
                      placeholder="000"
                      inputProps={{ autoComplete: 'cc-csc' }} 
                    />
                  </Grid>
                  
                  {paymentMethod === "credit" && planType === "yearly" && ( 
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Parcelamento</InputLabel>
                        <Select label="Parcelamento" value={installments} onChange={(e) => setInstallments(Number(e.target.value))}>
                          {Array.from({ length: MAX_INSTALLMENTS }, (_, i) => {
                            const num = i + 1;
                            const currentInstallmentValue = yearlyAmountForInstallments / num;
                            if (currentInstallmentValue >= MIN_INSTALLMENT_VALUE || num === 1) {
                              return (<MenuItem key={num} value={num}>{num}x de R$ {currentInstallmentValue.toFixed(2)}</MenuItem>);
                            }
                            return null;
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  )}
                </Grid>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ backgroundColor: "#f9f9f9", borderRadius: 2, p: 3, border: "1px solid #eee", position: "sticky", top: 20 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#D33180", fontSize: "1.25rem" }}>
                Total a pagar:
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#D33180", mb: 3, fontSize: "2rem" }}>
                R${totalAmount.toFixed(2)}/mês 
              </Typography>

              {paymentMethod === "credit" && planType === "yearly" && installments > 1 && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: "500" }}>
                    Parcelamento: {installments}x de R$ {installmentAmount.toFixed(2)} 
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mt: 0.5 }}>
                    (Valor total: R$ {yearlyAmountForInstallments.toFixed(2)}) 
                  </Typography>
                </Box>
              )}

              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                Cobrança recorrente {planType === "monthly" ? "mensal" : "anual"}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 3 }}>
                Suporte online
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1, color: 'black' }}>
                  Resumo do Plano:
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Plano: {fallbackInfo.name} 
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Periodicidade: {planType === "monthly" ? "Mensal" : "Anual"}
                </Typography>
                {planType === "monthly" && (
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Valor Mensal: R$ {totalAmount.toFixed(2)}
                  </Typography>
                )}
                {planType === "yearly" && (
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Valor Total Anual: R$ {yearlyAmountForInstallments.toFixed(2)}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                  {planType === "yearly" && fallbackInfo.monthlyPrice > 0 && totalAmount < fallbackInfo.monthlyPrice && (
                    <span style={{ color: "#D33180", fontWeight: "bold" }}>
                      Economia de {((1 - totalAmount / fallbackInfo.monthlyPrice) * 100).toFixed(0)}% 
                      em relação ao plano mensal
                    </span>
                  )}
                </Typography>
              </Box>
              <Button fullWidth type="submit" variant="contained" sx={{ backgroundColor: "#D33180", color: "white", py: 1.5, borderRadius: "20px", fontWeight: "bold", fontSize: "16px", "&:hover": { backgroundColor: "#C12A6F" }}}>
                Finalizar Assinatura
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}