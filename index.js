import { useEffect } from "react";
import { useTelegram } from "@twa-dev/sdk";

function App() {
  const { initDataUnsafe, expand } = useTelegram();

  useEffect(() => {
    expand(); // Разворачивает мини-приложение на весь экран
  }, []);

  return (
    <div>
      <h1>Привет, {initDataUnsafe?.user?.first_name}!</h1>
      <p>Добро пожаловать в сервис бронирования переговорной комнаты.</p>
    </div>
  );
}

export default App;
