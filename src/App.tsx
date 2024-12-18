import { useEffect, useState } from 'react';
import { Terminal, Skull, Shield, Timer } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

function App() {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(259200 ); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-8 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-center space-x-4 mb-12 animate-pulse">
          <Skull className="w-12 h-12" />
          <h1 className="text-4xl font-bold glitch-text">YOU'VE BEEN HACKED!</h1>
          <Skull className="w-12 h-12" />
        </div>

        <Alert className="border-red-500 bg-black/50 animate-pulse">
          <Shield className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-500">
            Your system security has been breached. All your files are now encrypted.
          </AlertDescription>
        </Alert>

        <Card className="bg-black/50 border-green-500 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-5 h-5" />
            <h2 className="text-xl">System Status</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Encryption Progress:</span>
              <Progress value={progress} className="w-64" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Badge variant="outline" className="justify-between">
                <span>CPU Usage</span>
                <span>100%</span>
              </Badge>
              <Badge variant="outline" className="justify-between">
                <span>Memory</span>
                <span>LOCKED</span>
              </Badge>
              <Badge variant="outline" className="justify-between">
                <span>Network</span>
                <span>COMPROMISED</span>
              </Badge>
              <Badge variant="outline" className="justify-between">
                <span>Firewall</span>
                <span>DISABLED</span>
              </Badge>
            </div>
          </div>
        </Card>

        <Card className="bg-black/50 border-red-500 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Timer className="w-5 h-5 text-red-500" />
            <h2 className="text-xl text-red-500">Time Remaining</h2>
          </div>
          <div className="text-5xl font-bold text-center text-red-500 tabular-nums">
            {formatTime(timeLeft)}
          </div>
          <p className="text-center mt-4 text-red-500">
            Transfer money to the to be provided address or lose your data and system forever.
          </p>
          <p className="text-center mt-4 text-red-500">
            We're going to infiltrate your phone through this domain if you disobey.
          </p>
        </Card>

        <div className="text-sm text-center mt-8 animate-pulse">
          <p>ATTEMPTING TO TRACE LOCATION...</p>
          <p>CONNECTION ENCRYPTED...</p>
          <p>ACCESS DENIED...</p>
        </div>
      </div>
    </div>
  );
}

export default App;