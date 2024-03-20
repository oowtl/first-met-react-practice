import React, { useState } from "react";

export default function ConfirmButtonFC() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return <button onClick={handleConfirm}>{isConfirmed ? "ON" : "OFF"}</button>;
}
