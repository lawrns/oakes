// Formatting utilities for numbers, currency, and text

export function formatCurrency(
  amount: number,
  options?: {
    compact?: boolean;
    showCents?: boolean;
  }
): string {
  const { compact = false, showCents = false } = options || {};

  if (compact) {
    if (amount >= 1_000_000_000) {
      return `$${(amount / 1_000_000_000).toFixed(1)}B`;
    }
    if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(1)}M`;
    }
    if (amount >= 1_000) {
      return `$${(amount / 1_000).toFixed(1)}K`;
    }
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(amount);
}

export function formatNumber(
  num: number,
  options?: {
    compact?: boolean;
    decimals?: number;
  }
): string {
  const { compact = false, decimals = 0 } = options || {};

  if (compact) {
    if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(decimals)}B`;
    }
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(decimals)}M`;
    }
    if (num >= 1_000) {
      return `${(num / 1_000).toFixed(decimals)}K`;
    }
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}

export function formatPercentage(
  value: number,
  options?: {
    decimals?: number;
    showSign?: boolean;
  }
): string {
  const { decimals = 1, showSign = false } = options || {};
  const sign = showSign && value > 0 ? "+" : "";
  return `${sign}${value.toFixed(decimals)}%`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
