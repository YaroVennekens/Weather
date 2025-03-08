
interface ErrorProps {
    error: string;
}

export default function Error({ error }: ErrorProps) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-950 to-purple-900">
          <div className="text-white text-xl">{error}</div>
      </div>
    );
}