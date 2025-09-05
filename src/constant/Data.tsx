import {
  Dumbbell,
  Apple,
  BedDouble,
  Smile,
  Droplets,
  Activity,
  Brain,
  HeartPulse,
  SquareActivity,
  Stethoscope,
} from 'lucide-react-native';
export const tipsData: TYpeNS.TipItem[] = [
  {
    id: '1',
    title: 'Stay Active',
    description: 'Aim for at least 30 minutes of moderate exercise daily.',
    icon: <Dumbbell size={32} color="#fff" />,
    colors: ['#36d1dc', '#5b86e5'], // teal-blue
  },
  {
    id: '2',
    title: 'Eat Fresh',
    description: 'Fill half your plate with fruits and veggies every meal.',
    icon: <Apple size={32} color="#fff" />,
    colors: ['#56ab2f', '#a8e063'], // green
  },
  {
    id: '3',
    title: 'Sleep Well',
    description: 'Get 7-8 hours of quality sleep to recharge your body.',
    icon: <BedDouble size={32} color="#fff" />,
    colors: ['#141E30', '#243B55'], // dark blue
  },
  {
    id: '4',
    title: 'Manage Stress',
    description: 'Practice deep breathing or meditation for 10 mins daily.',
    icon: <Smile size={32} color="#fff" />,
    colors: ['#ff9966', '#ff5e62'], // orange-red
  },
  {
    id: '5',
    title: 'Stay Hydrated',
    description: 'Drink at least 8 glasses of water to keep your body fresh.',
    icon: <Droplets size={32} color="#fff" />,
    colors: ['#4facfe', '#00f2fe'], // sky blue
  },
];



export const riskData: TYpeNS.RiskItem[] = [
  {
    id: "1",
    system: "Cardio",
    icon: <HeartPulse size={32} color="#fff" />,
    riskLevel: "Moderate",
    description: "Moderate risk of heart disease.",
  },
  {
    id: "2",
    system: "Neuro",
    icon: <Brain size={32} color="#fff" />,
    riskLevel: "Low",
    description: "Low risk of neurodegenerative conditions.",
  },
  {
    id: "3",
    system: "Respiratory",
    icon: <SquareActivity size={32} color="#fff" />,
    riskLevel: "Moderate",
    description: "Some risk of reduced lung capacity.",
  },
  {
    id: "4",
    system: "Digestive",
    icon: <Stethoscope size={32} color="#fff" />,
    riskLevel: "High",
    description: "High risk of early onset diabetes.",
  },
  {
    id: "5",
    system: "Musculoskeletal",
    icon: <Activity size={32} color="#fff" />,
    riskLevel: "Moderate",
    description: "Risk of early onset osteoarthritis.",
  },
];

export const cards = [
  {
    id: 1,
    title: "Stay Active",
    image: "https://images.unsplash.com/photo-1609377375724-8fadc82cd50e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpdG5lc3MlMjB0cmFja2VyfGVufDB8fDB8fHww", // exercise
  },
  {
    id: 2,
    title: "Eat Healthy",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088", // fruits
  },
  {
    id: 3,
    title: "Sleep Well",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", // sleep
  },
];