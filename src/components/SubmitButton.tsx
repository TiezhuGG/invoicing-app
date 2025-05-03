import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full font-semibold cursor-pointer"
      disabled={pending ? true : false}
    >
      {pending ? (
        <div className="flex items-center gap-4">
          <LoaderCircle className="w-4 h-4 animate-spin" />
          Submitting...
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
};
