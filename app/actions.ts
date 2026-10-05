'use server'

import { productGroups } from '@/lib/site-data'

export type RfqState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'company' | 'email' | 'phone' | 'product' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/

function field(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? '').trim().slice(0, max)
}

export async function submitRfq(_prev: RfqState, formData: FormData): Promise<RfqState> {
  const data = {
    name: field(formData, 'name', 120),
    company: field(formData, 'company', 160),
    email: field(formData, 'email', 200),
    phone: field(formData, 'phone', 25),
    product: field(formData, 'product', 60),
    message: field(formData, 'message', 3000),
  }

  const errors: RfqState['errors'] = {}
  if (data.name.length < 2) errors.name = 'Lütfen adınızı ve soyadınızı girin.'
  if (data.company.length < 2) errors.company = 'Lütfen şirket adını girin.'
  if (!EMAIL_RE.test(data.email)) errors.email = 'Geçerli bir e-posta adresi girin.'
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = 'Geçerli bir telefon numarası girin.'
  if (!(productGroups as readonly string[]).includes(data.product)) errors.product = 'Lütfen bir ürün grubu seçin.'
  if (data.message.length < 10) errors.message = 'Lütfen talebinizi kısaca açıklayın (en az 10 karakter).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Lütfen işaretli alanları kontrol edin.', errors }
  }

  // TODO: Talebi e-posta (ör. Resend) veya veritabanı ile iletin.

  return {
    status: 'success',
    message: `Teşekkürler ${data.name.split(' ')[0]}! Teklif talebiniz alındı, ekibimiz en kısa sürede ${data.email} adresinden size dönüş yapacak.`,
  }
}
