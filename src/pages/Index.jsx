import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loading } from "@/components/ui/loading";
import { format } from "date-fns";

const Index = () => {
  const [crypto, setCrypto] = useState("BTC/USDT");
  const [strategy, setStrategy] = useState("SMA_Crossover");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(2023, 7, 1),
    endDate: new Date(),
  });
  const [initialBalance, setInitialBalance] = useState(10000);
  const [takeProfit, setTakeProfit] = useState(null);
  const [stopLoss, setStopLoss] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRunBacktest = () => {
    setLoading(true);
    // Simulate backtest running
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-5 mt-5">
        <h1 className="text-3xl">加密貨幣回測應用</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>設定參數</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>選擇加密貨幣:</Label>
              <Select value={crypto} onValueChange={setCrypto}>
                <SelectTrigger>
                  <SelectValue placeholder="選擇加密貨幣" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BTC/USDT">BTC/USDT</SelectItem>
                  <SelectItem value="ETH/USDT">ETH/USDT</SelectItem>
                  <SelectItem value="LTC/USDT">LTC/USDT</SelectItem>
                </SelectContent>
              </Select>
              <Label className="mt-4">選擇策略:</Label>
              <Select value={strategy} onValueChange={setStrategy}>
                <SelectTrigger>
                  <SelectValue placeholder="選擇策略" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SMA_Crossover">SMA_Crossover</SelectItem>
                  <SelectItem value="EMA_Crossover">EMA_Crossover</SelectItem>
                  <SelectItem value="RSI_Strategy">RSI_Strategy</SelectItem>
                </SelectContent>
              </Select>
              <Label className="mt-4">選擇日期範圍:</Label>
              {/* DatePicker components removed as per instructions */}
              <Label className="mt-4">初始資金:</Label>
              <Input
                type="number"
                value={initialBalance}
                onChange={(e) => setInitialBalance(e.target.value)}
                placeholder="初始資金"
                className="w-full"
              />
              <Label className="mt-4">獲利 (%):</Label>
              <Input
                type="number"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
                placeholder="獲利 (%)"
                className="w-full"
              />
              <Label className="mt-4">止損 (%):</Label>
              <Input
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
                placeholder="止損 (%)"
                className="w-full"
              />
              <Button onClick={handleRunBacktest} className="mt-4 w-full">
                運行回測
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Loading loading={loading}>
            <div>
              <h2 className="text-xl mb-4">價格圖表</h2>
              {/* Placeholder for price chart */}
              <div className="h-64 bg-gray-200 rounded-md"></div>
              <h2 className="text-xl mt-6 mb-4">績效圖表</h2>
              {/* Placeholder for performance chart */}
              <div className="h-64 bg-gray-200 rounded-md"></div>
              <h2 className="text-xl mt-6 mb-4">訂單日誌</h2>
              {/* Placeholder for order log */}
              <div className="h-64 bg-gray-200 rounded-md"></div>
            </div>
          </Loading>
        </div>
      </div>
    </div>
  );
};

export default Index;