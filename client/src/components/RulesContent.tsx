/**
 * Shared rules copy for modal and on-page section
 */

export default function RulesContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "#d1d5db" }}>
      <section>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#ffffff" }}>
          1. Общие положения
        </h3>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>
            Doomsheek — это модифицированный клиент, предназначенный исключительно для образовательных и
            развлекательных целей.
          </li>
          <li>
            Используя клиент, пользователь берёт на себя полную ответственность за последствия (баны,
            ограничения и т.д.).
          </li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#ffffff" }}>
          2. Запрещено
        </h3>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>❌ Продавать или распространять клиент без разрешения разработчика.</li>
          <li>❌ Выдавать Doomsheek за собственную разработку.</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#ffffff" }}>
          3. Разрешено
        </h3>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>✅ Использовать клиент на анархических серверах.</li>
          <li>✅ Использовать в одиночной игре.</li>
          <li>✅ Делать обзоры и видео с указанием оригинального названия клиента.</li>
          <li>✅ Предлагать идеи и улучшения.</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#ffffff" }}>
          4. Ответственность
        </h3>
        <p style={{ margin: "0 0 0.5rem 0" }}>⚠️ Разработчик не несёт ответственности за:</p>
        <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <li>блокировку аккаунта;</li>
          <li>возможные конфликты с администрацией серверов.</li>
        </ul>
      </section>

      <div
        style={{
          padding: "1rem",
          background: "rgba(59, 130, 246, 0.1)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          borderRadius: "0.75rem",
          marginTop: "1rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          Используя клиент, вы подтверждаете, что ознакомились с правилами и принимаете их.
        </p>
      </div>
    </div>
  );
}
