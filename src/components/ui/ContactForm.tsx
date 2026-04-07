"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
};

const eventTypes = [
  "Mariage",
  "Anniversaire",
  "Soirée privée / EVJF / EVG",
  "Événement professionnel",
  "Autre",
];

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guestCount: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Un email valide est requis.";
    if (!form.eventType) newErrors.eventType = "Veuillez choisir un type d'événement.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Dans un vrai projet, on enverrait ici les données à une API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 p-12 text-center">
        <CheckCircle className="h-16 w-16 text-violet-400" />
        <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
        <p className="text-gray-400 max-w-md">
          Merci {form.name} ! J'ai bien reçu votre message et je vous répondrai sous 24h.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Nom & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Nom complet <span className="text-violet-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email <span className="text-violet-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jean@exemple.fr"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      {/* Téléphone & Type d'événement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-1">
            Type d&apos;événement <span className="text-violet-400">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          >
            <option value="" className="text-gray-600">
              Choisissez...
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="mt-1 text-xs text-red-400">{errors.eventType}</p>
          )}
        </div>
      </div>

      {/* Date & Nombre d'invités */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-1">
            Date prévue
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={form.eventDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors [color-scheme:dark]"
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-gray-300 mb-1">
            Nombre d&apos;invités
          </label>
          <input
            id="guestCount"
            name="guestCount"
            type="number"
            min="1"
            value={form.guestCount}
            onChange={handleChange}
            placeholder="ex: 150"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Votre message <span className="text-violet-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez votre événement, vos attentes musicales, le lieu..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <p className="text-xs text-gray-600">
        * Champs obligatoires. Vos données ne seront jamais partagées avec des tiers.
      </p>

      <Button type="submit" size="lg" className="w-full">
        <Send className="h-5 w-5" />
        Envoyer mon message
      </Button>
    </form>
  );
}
