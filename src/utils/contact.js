export const studioContact = Object.freeze({
  email: 'ben@solonova.ai',
  phone: '+918861699354',
  whatsapp: '918861699354'
});

export function whatsappUrl(text = '') {
  return `https://wa.me/${studioContact.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export const inquiryUrl = whatsappUrl("Hi Solonova Studio, I'd like to discuss booking a website sprint.");
