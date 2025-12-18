"use client"

import { Badge } from "@workspace/ui/components/badge"
import { useTranslations } from "next-intl"

export function LanguageBadge() {
  const t = useTranslations("common")

  return (
    <Badge variant="secondary" className="uppercase tracking-wide">
      {t("language")}
    </Badge>
  )
}
