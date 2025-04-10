import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export function MyButton({
  children,
  loading,
  className,
  ...props
}: MyButtonProps) {
  return (
    <Button disabled={loading} className={className} {...props}>
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          Please wait
        </span>
      ) : (
        children
      )}
    </Button>
  );
}
