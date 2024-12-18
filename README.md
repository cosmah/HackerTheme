# Cyber Threat Simulator

![Hacker Theme](https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200&h=400)

A dramatic, interactive React application that simulates a cyber attack scenario using modern UI components and animations. Built with React, TypeScript, and shadcn/ui.

## 🚀 Features

- **Real-time Encryption Progress**: Simulated encryption progress bar that continuously updates
- **Countdown Timer**: Dramatic countdown display with hours, minutes, and seconds
- **System Status Monitoring**: Live status indicators for CPU, Memory, Network, and Firewall
- **Glitch Effects**: Custom CSS animations for authentic "hacked" appearance
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Theme**: Matrix-inspired green-on-black color scheme
- **Modern UI Components**: Built with shadcn/ui for a polished look

## 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/cosmah/HackerTheme.git
```

2. Navigate to the project directory:
```bash
cd HackerTheme
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/         # UI components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
├── App.tsx            # Main application component
├── index.css         # Global styles and animations
└── main.tsx          # Application entry point
```

## 🎨 Customization

### Modifying the Timer
The countdown timer starts at 72 hour (259200 seconds) by default. To change the duration, modify the `timeLeft` state in `App.tsx`:

```typescript
const [timeLeft, setTimeLeft] = useState(259200); // Change this value
```

### Changing Colors
The application uses Tailwind CSS for styling. The main color scheme can be modified in `index.css`:

```css
:root {
  --primary: 142 71% 45%;  /* Modify these values */
  --border: 142 71% 45%;   /* for different colors */
}
```

### Glitch Effect
The glitch animation can be customized by modifying the keyframes in `index.css`:

```css
@keyframes glitch {
  /* Modify timing and shadow values for different effects */
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing
0. Star the repository
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## ⚠️ Disclaimer

This project is for educational purposes only. It simulates a cyber attack scenario for demonstration and should not be used for malicious purposes.
