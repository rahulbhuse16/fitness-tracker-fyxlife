declare namespace TYpeNS{
    interface GoalCardProps {
  emoji: string;
  title: string;
  progress: number; // 0 to 1
  target: string;
}
type TipItem = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  colors: string[];
};
type RiskItem = {
  id: string;
  system: string;
  icon: React.ReactNode;
  riskLevel: "Low" | "Moderate" | "High";
  description: string;
};
}