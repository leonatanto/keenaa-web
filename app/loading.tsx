import { LoadingDots } from "@/components/icons";
import LoadingMessage from "@/components/LoadingMessage";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="scale-150">
          <LoadingDots />
        </div>
        <LoadingMessage />
      </div>
    </div>
  );
} 