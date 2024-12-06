import React from "react";
import Link from "next/link";

const FollowUs = () => {
  return (
    <div className="overview-area ptb-100">
      <div className="container">
        {/* <div className="overview-box">
          <div className="overview-content">
            <span className="sub-title">Online Learning</span>
            <h2>New to trading? Find out if trading suits you</h2>
            <p>
              Our courses have been designed so you can step in at any level of
              experience. If you are a beginner, we will take you from the most
              basic principles all the way up to the strategies used by 1000ths
              of profitable traders. You’ll have strong support along the way
              from our team of professional traders and your fellow community
              members.
            </p>

            <Link href="#" className="default-btn">
              <i className="flaticon-user"></i>Learn more about trading
              <span></span>
            </Link>
          </div>

          <div className="overview-image">
            <img src="/images/overview-img1.png" alt="image" />
          </div>
        </div> */}

        <div className="overview-box">
          <div className="overview-image">
            <img src="/images/overview-img2.png" alt="image" />
          </div>

          <div className="overview-content">
            <span className="sub-title">Follow US</span>
            <h2>Full-time trader crypto and stock trader</h2>
            {/* <p>Full time trader crypto and stock trader</p> */}

            <div className="btn-box">
              <a
                href="https://www.discord.gg/blockchainedsnipers"
                target="_blank"
                className="playstore-btn"
                alt="Discord"
              >
                <img src="/images/discord.png" alt="image" />
                <span>Discord</span>Community
              </a>
            </div>
            <div className="btn-box">
              <a
                href="https://www.youtube.com/channel/UCItYfMrbngJt2lKLjHZNrIQ"
                target="_blank"
                className="playstore-btn"
                alt="Youtube"
              >
                <img src="/images/youtube.png" alt="image" />
                <span>Youtube</span>Channel
              </a>
            </div>
            <div className="btn-box">
              <a
                href="https://bingx.com/partner/Vivian"
                target="_blank"
                className="playstore-btn"
                alt="BingX"
              >
                <img
                  src="/images/BingX.png"
                  alt="image"
                  width="32px"
                  height="32px"
                />
                <span>BingX</span>Referral
              </a>
            </div>
            <div className="btn-box">
              <a
                href="https://partner.bybit.com/b/50336"
                target="_blank"
                className="playstore-btn"
                alt="Bybit"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA4NyAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYyLjAwODMgMjUuMzU3MlYzSDY2LjUwMjJWMjUuMzU3Mkg2Mi4wMDgzWiIgZmlsbD0iI0Y3QTYwMCIvPgo8cGF0aCBkPSJNOS42MzQwNyAzMS45OTgzSDBWOS42NDExMUg5LjI0NjY2QzEzLjc0MDYgOS42NDExMSAxNi4zNTkxIDEyLjA5MDMgMTYuMzU5MSAxNS45MjE0QzE2LjM1OTEgMTguNDAxMyAxNC42Nzc0IDIwLjAwMzkgMTMuNTEzNCAyMC41Mzc1QzE0LjkwMjggMjEuMTY1MiAxNi42ODEzIDIyLjU3NzkgMTYuNjgxMyAyNS41NjI0QzE2LjY4MTMgMjkuNzM3MyAxMy43NDA2IDMxLjk5ODMgOS42MzQwNyAzMS45OTgzWk04Ljg5MDk2IDEzLjUzNTVINC40OTM5VjE4LjY4NTJIOC44OTA5NkMxMC43OTgxIDE4LjY4NTIgMTEuODY1MiAxNy42NDg4IDExLjg2NTIgMTYuMTA5NUMxMS44NjUyIDE0LjU3MTkgMTAuNzk4MSAxMy41MzU1IDguODkwOTYgMTMuNTM1NVpNOS4xODE1MSAyMi42MTA0SDQuNDkzOVYyOC4xMDU2SDkuMTgxNTFDMTEuMjE4OSAyOC4xMDU2IDEyLjE4NzQgMjYuODUwMyAxMi4xODc0IDI1LjM0MThDMTIuMTg3NCAyMy44MzUgMTEuMjE3MSAyMi42MTA0IDkuMTgxNTEgMjIuNjEwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4zODgyIDIyLjgyOTNWMzEuOTk4M0gyNS45MjZWMjIuODI5M0wxOS4wMDczIDkuNjQxMTFIMjMuODg4NkwyOC4xODg4IDE4LjY1MjdMMzIuNDIzOSA5LjY0MTExSDM3LjMwNTJMMzAuMzg4MiAyMi44MjkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUwLjA0NTcgMzEuOTk4M0g0MC40MTE2VjkuNjQxMTFINDkuNjU4M0M1NC4xNTIyIDkuNjQxMTEgNTYuNzcwNyAxMi4wOTAzIDU2Ljc3MDcgMTUuOTIxNEM1Ni43NzA3IDE4LjQwMTMgNTUuMDg5IDIwLjAwMzkgNTMuOTI1IDIwLjUzNzVDNTUuMzE0NCAyMS4xNjUyIDU3LjA5MyAyMi41Nzc5IDU3LjA5MyAyNS41NjI0QzU3LjA5MyAyOS43MzczIDU0LjE1MjIgMzEuOTk4MyA1MC4wNDU3IDMxLjk5ODNaTTQ5LjMwMjYgMTMuNTM1NUg0NC45MDU1VjE4LjY4NTJINDkuMzAyNkM1MS4yMDk3IDE4LjY4NTIgNTIuMjc2OCAxNy42NDg4IDUyLjI3NjggMTYuMTA5NUM1Mi4yNzY4IDE0LjU3MTkgNTEuMjA5NyAxMy41MzU1IDQ5LjMwMjYgMTMuNTM1NVpNNDkuNTkzMSAyMi42MTA0SDQ0LjkwNTVWMjguMTA1Nkg0OS41OTMxQzUxLjYzMDUgMjguMTA1NiA1Mi41OTkgMjYuODUwMyA1Mi41OTkgMjUuMzQxOEM1Mi41OTkgMjMuODM1IDUxLjYzMDUgMjIuNjEwNCA0OS41OTMxIDIyLjYxMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODAuOTg2IDEzLjUzNTVWMzJINzYuNDkyMVYxMy41MzU1SDcwLjQ3ODVWOS42NDExMUg4Ni45OTk2VjEzLjUzNTVIODAuOTg2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                  alt="image"
                  width="32px"
                  height="32px"
                />
                <span>Bybit</span>Referral
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="shape2">
        <img src="/images/shape2.png" alt="image" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.png" alt="image" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.png" alt="image" />
      </div>
      <div className="shape9">
        <img src="/images/shape8.svg" alt="image" />
      </div>
    </div>
  );
};

export default FollowUs;
