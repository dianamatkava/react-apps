import React from "react";

export function Footer() {
  const nowHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = nowHour > openHour && nowHour < closeHour;

  return (
    <>
      <footer className="footer">
        <div className="order">
          {isOpen ? (
            <>
              <p>We are currently open untill {closeHour}:00</p>
              <button className="btn">Order</button>
            </>
          ) : (
            <p>Unfortunately we are close. We will back at {openHour}:00</p>
          )}
        </div>
      </footer>
    </>
  );
}
