@media (max-width: 768px) {
  .header-right {
    gap: 20px;
  }

  .logo {
    font-size: 5vw;
  }

  .explore-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .user-icon {
    font-size: 16px;
    padding: 6px;
  }
}

@media (max-width: 600px) {
  .header-right {
    gap: 10px;
  }

  .phone-container {
    display: none;
  }

  .logo {
    font-size: 6vw;
  }
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }

  .left,
  .right {
    width: 100%;
  }

  .left h1 {
    font-size: 6vw;
    margin-left: 0;
  }

  .left p {
    margin-left: 0;
    font-size: 4vw;
  }
}

@media (max-width: 600px) {
  .right {
    display: none;
  }

  .left {
    padding: 20px;
  }

  .search-box {
    flex-direction: column;
    padding: 20px;
  }

  .search-field input,
  .search-btn {
    font-size: 14px;
  }
}

@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  .car-info {
    font-size: 14px;
  }

  .car-info i {
    font-size: 16px;
  }

  .actions {
    flex-direction: column;
    gap: 15px;
  }

  .price-booking {
    flex-direction: column;
    align-items: start;
  }
}

@media (max-width: 768px) {
  .step-section h1 {
    font-size: 5vw;
    margin-left: 0;
    text-align: center;
  }

  .step-card1 {
    width: 80%;
  }

  .card-icon1 i,
  .card-icon2 i,
  .card-icon3 i,
  .card-icon4 i {
    font-size: 5vw;
  }
}

@media (max-width: 768px) {
  .Blog-section h1 {
    font-size: 5vw;
    margin-left: 0;
    text-align: center;
  }

  .Blog-card1 {
    width: 280px;
  }

  .bgp {
    font-size: 16px;
  }

  .dates {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
  }

  .footer-col.about {
    text-align: center;
  }

  .footer-col.about p {
    font-size: 14px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }

  .car-name {
    font-size: 16px;
  }

  .price-booking strong {
    font-size: 18px;
  }

  .search-field label {
    font-size: 12px;
  }
}
