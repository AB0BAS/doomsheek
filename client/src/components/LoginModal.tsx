/**
 * DOOMSHEEK Login Modal
 * Registration and login form with email code verification
 */

import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<"form" | "verification">("form");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Пожалуйста, введите email");
      return;
    }

    setIsLoading(true);
    const code = generateCode();
    setSentCode(code);

    // Simulate sending email
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(`Email sent to ${email} with code: ${code}`);
      setMessage(`Код отправлен на ${email}`);
      setStep("verification");
    } catch (error) {
      setMessage("Ошибка при отправке кода");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode !== sentCode) {
      setMessage("Неверный код. Попробуйте снова");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (isLogin) {
        console.log("Login successful", { email });
        setMessage("Успешный вход!");
      } else {
        if (!password || !username) {
          setMessage("Пожалуйста, заполните все поля");
          return;
        }
        console.log("Registration successful", { email, username, password });
        setMessage("Аккаунт создан успешно!");
      }

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setMessage("Ошибка при обработке запроса");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendCode(e);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1.5rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: "24rem",
          width: "100%",
          padding: "2rem",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          <X size={18} />
        </button>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          {step === "form" ? (isLogin ? "Вход" : "Регистрация") : "Подтверждение"}
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "2rem", fontSize: "0.875rem" }}>
          {step === "form"
            ? isLogin
              ? "Введите ваш email для входа"
              : "Создайте новый аккаунт для начала"
            : `Введите код, отправленный на ${email}`}
        </p>

        {message && (
          <div
            style={{
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "0.5rem",
              background: message.includes("Ошибка") ? "rgba(239, 68, 68, 0.1)" : "rgba(34, 197, 94, 0.1)",
              border: `1px solid ${message.includes("Ошибка") ? "rgba(239, 68, 68, 0.3)" : "rgba(34, 197, 94, 0.3)"}`,
              color: message.includes("Ошибка") ? "#fca5a5" : "#86efac",
              fontSize: "0.875rem",
            }}
          >
            {message}
          </div>
        )}

        {step === "form" ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {!isLogin && (
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "#d1d5db",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  <User size={16} />
                  Имя пользователя
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ваше имя"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                    e.target.style.background = "rgba(255,255,255,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                />
              </div>
            )}

            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#d1d5db",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "0.5rem",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  outline: "none",
                  transition: "all 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.target.style.background = "rgba(255,255,255,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(59, 130, 246, 0.2)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
            </div>

            {!isLogin && (
              <div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "#d1d5db",
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  <Lock size={16} />
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontSize: "0.875rem",
                    outline: "none",
                    transition: "all 0.2s",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                    e.target.style.background = "rgba(255,255,255,0.08)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                marginTop: "1rem",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: isLoading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {isLoading ? "Отправка..." : "Отправить код"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#d1d5db",
                  marginBottom: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}
              >
                <Mail size={16} />
                Код подтверждения
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                placeholder="XXXXXX"
                maxLength={6}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "0.5rem",
                  color: "#ffffff",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.2s",
                  textAlign: "center",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(59, 130, 246, 0.5)";
                  e.target.style.background = "rgba(255,255,255,0.08)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(59, 130, 246, 0.2)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "0.75rem",
                marginTop: "1rem",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: isLoading ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                opacity: isLoading ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#3b82f6";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {isLoading ? "Проверка..." : "Подтвердить"}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep("form");
                setVerificationCode("");
                setMessage("");
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#3b82f6",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
            >
              Вернуться назад
            </button>
          </form>
        )}

        {step === "form" && (
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <p style={{ color: "#9ca3af", fontSize: "0.875rem", margin: "0 0 1rem 0" }}>
              {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}
            </p>
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage("");
                setEmail("");
                setPassword("");
                setUsername("");
              }}
              style={{
                background: "transparent",
                border: "none",
                color: "#3b82f6",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.875rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#3b82f6")}
            >
              {isLogin ? "Зарегистрироваться" : "Вернуться к входу"}
            </button>
            <p
              style={{
                margin: "0.9rem 0 0",
                color: "#fca5a5",
                fontSize: "0.8rem",
              }}
            >
              Регистрация временно недоступна.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
