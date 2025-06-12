import { LoadingDots } from "@/components/icons";
import LoadingMessage from "@/components/LoadingMessage";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-4">
        <div className="scale-125 sm:scale-150">
          <LoadingDots />
        </div>
        <LoadingMessage />
      </div>
    </div>
  );
} 