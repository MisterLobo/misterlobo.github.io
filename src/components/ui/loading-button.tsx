import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const LoadingButton = ({ text = 'Loading', icon = true }: { text?: string, icon?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      {icon ?
      <Button size="icon" variant="secondary">
        <Loader className="animate-spin" />
      </Button> :
      <Button>
        <Loader className="animate-spin" /> {text}
      </Button>
      }
    </div>
  );
};

export default LoadingButton;
