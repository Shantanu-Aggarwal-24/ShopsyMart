import React from "react";
import styled from "styled-components";


const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted by 1000+ companies</h3>
        <div className="brand-section-slider">
          {/* My 1st Img */}
          <div className="slide">
            <img
              src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8WQB2_DWXp6Q32CfKH3h7eNJx8zPuhYLA52Z7rHc0A&s"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://th-i.thgim.com/public/incoming/yx5eem/article65529724.ece/alternates/FREE_1200/tcs.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47DAMVd9iJT8SFzd_OuXn-RLnK44FZUhD_zFOA8jErsncLYWzBt0Y78fbegk6P1jLO2g&usqp=CAU"
              alt="trusted-brands"
            />
          </div>

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 5rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;