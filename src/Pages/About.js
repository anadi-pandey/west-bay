import React from "react";
import ciBanner from "../assets/aboutUs/Group 52.png";
import anti from "../assets/aboutUs/anti.png.png";
import autria from "../assets/aboutUs/autria.png.png";
import dom from "../assets/aboutUs/dom.png.png";
import egypt from "../assets/aboutUs/egypt.png.png";
import greneda from "../assets/aboutUs/greneda.png.png";
import jordan from "../assets/aboutUs/jordan.png.png";
import malta from "../assets/aboutUs/malta.png.png";
import mont from "../assets/aboutUs/monte.png.png";
import north from "../assets/aboutUs/north-macedonia.png.png";
import kitts from "../assets/aboutUs/kitts.png.png";
import luci from "../assets/aboutUs/lucia.png.png";
import turkey from "../assets/aboutUs/turkey.png.png";
import EB1 from "../assets/aboutUs/marisol-benitez-Ahe-PKqLNVs-unsplash 2.png";
import { Button } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="section-container">
        <div style={{ width: "50vw" }}>
          <div className="section-heading">
            Leading Citizenship by Investment Programs
          </div>
          <div className="section-content">
            Provide families with the privilege of acquiring an alternative
            citizenship, which in turn gives them the right to travel freely to
            various destinations and to settle in another country.
          </div>
        </div>
        <img src={ciBanner} alt="alt" style={{ width: "40%" }} />
      </div>
      <div className="article-container">
        <div className="article-heading">
          An Introduction to Citizenship by Investment
        </div>
        <div className="article-content">
          Principal grounds for acquiring citizenship are birth within a certain
          territory, descent from a citizen parent, marriage to a citizen, and
          naturalisation. The conditions under which the privilege of
          naturalisation is granted vary from state to state, but family
          relationships or lengthy periods of residence are usually essential,
          besides character and other requirements. Other countries offer a
          route to citizenship following a reasonable period of residence, such
          as Australia, Canada, Greece, Portugal, Singapore, the UK, and the
          USA.
        </div>
      </div>
      <div className="article-container">
        <div className="article-heading">
          Grant of citizenship on the basis of an investment
        </div>
        <div className="article-content">
          Most countries have provisions that allow their government to grant
          citizenship in return for major contributions to society, culture, the
          economy, and other interests of the state. However, this discretion of
          the government is exercised extremely rarely. Several countries had
          programs in place at different times in the past that were
          specifically designed to attract foreign investors in return for
          citizenship. These include Ireland, whose program was terminated in
          2001, Belize (until 2002), Grenada (terminated 2001 but reopened in
          2014), Cape Verde, Seychelles, Slovakia, and several others. This
          record of designing, implementing, operating, and positioning
          citizenship by investment programs on behalf of governments is unique
          to Westbay Global Private Limited. It is an important and distinct
          advantage that all our clients enjoy.
        </div>
      </div>

      <div className="citizen-planning">
        <div className="citizen-card">
          <div className="citizen-heading">
            Citizenship by Investment Overview
          </div>
          <div className="citizen-content">
            Citizenship by investment programs offer you the opportunity to
            legally acquire a new citizenship quickly and simply, without
            onerous, typical visa and passport application processes.
          </div>
        </div>
        <div className="citizen-card">
          {" "}
          <div className="citizen-heading">Why Citizenship by Investment?</div>
          <div className="citizen-content">
            In an unsettled, ever-changing world, acquiring an alternative
            citizenship is a wise decision and an investment for the future.
          </div>
        </div>
        <div className="citizen-card">
          {" "}
          <div className="citizen-heading">Important Points</div>
          <div className="citizen-content">
            Citizenship is the most privileged form of nationality, a broader
            term that is used in international law to denote all persons whom a
            state is entitled to protect.
          </div>
        </div>
      </div>

      <div
        style={{
          color: "#25538D",
          lineHeight: "52px",
          fontSize: "40px",
          fontWeight: "600",
          marginLeft: "32px",
          marginTop: "100px",
        }}
      >
        RESIDENCY & CITIZENSHIP IMMIGRATION PROGRAMS
      </div>

      <div
        style={{
          display: "flex",
          width: "95%",
          marginInline: "auto",
          marginTop: "50px",
          border: "solid 1px rgba(80,80,80,50%)",
          borderRadius: "5px",
          paddingLeft: "20px",
        }}
      >
        <div style={{ lineHeight: "50px" }}>
          <div
            className="about-heading"
            style={{
              fontSize: "40px",
              lineHeight: "50px",
              color: "#25538D",
              width: "50%",
              margin: "20px 0",
            }}
          >
            US EB-5 Immigrant Investor Program
          </div>
          <div
            style={{
              color: "#4B4B4B",
              fontSize: "24px",
              paddingRight: "150px",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            The US EB-5 Immigrant Investor Program allows applicants to invest a
            refundable amount of USD $800,000 in an approved EB-5 project
            spanning across the United States in exchange for a US green card
            (permanent residency) which eventually leads to a US passport and
            citizenship.
          </div>

          <Button>Know More</Button>
        </div>
        <div>
          <img src={EB1} />
        </div>
      </div>

      <div
        className="investment-program"
        style={{
          width: "fit-content",
          marginInline: "auto",
          textAlign: "center",
          marginTop: "70px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "20px 150px",
          marginBottom: "100px",
        }}
      >
        <div className="program-card">
          <div className="program-graphics">
            <img src={anti} alt="" />
            <div className="program-name">ANTIGUA AND BARBIUDA</div>
            <div className="program-content">
              Antigua and Barbuda offers one of the most competitive citizenship
              programs in the Caribbean. Options start from USD 100,000.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={autria} alt="" />
            <div className="program-name">Austria</div>
            <div className="program-content">
              Austria has one of the world’s strongest passports. Prospective
              citizens are required to make a substantial contribution to the
              country’s economy.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={dom} alt="" />
            <div className="program-name">Dominica</div>
            <div className="program-content">
              Dominica offers an attractive citizenship program with a real
              estate option. Required contributions start from USD 100,000.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={egypt} alt="" />
            <div className="program-name">EGYPT</div>
            <div className="program-content">
              Egyptian citizens benefit from the country’s transcontinental
              positioning between Africa, Asia, and the Middle East. An
              investment of USD 250,000 applies for citizenship.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={greneda} alt="" />
            <div className="program-name">GRENEDA</div>
            <div className="program-content">
              Grenada has the only Caribbean citizenship program that holds an
              E-2 Investor Visa Treaty with the USA, allowing citizens to be
              eligible to apply for a non- immigrant visa.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={jordan} alt="" />
            <div className="program-name">JORDAN</div>
            <div className="program-content">
              Jordan’s citizenship program grants investors access to a
              business-friendly location and citizenship of this diverse and
              peaceful Arab country for an investment of USD 750,000.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={malta} alt="" />
            <div className="program-name">MALTA</div>
            <div className="program-content">
              Citizenship by Naturalisation for Exceptional Services by Direct
              Investment. This process offers the world’s strictest due
              diligence standards and vetting.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={mont} alt="" />
            <div className="program-name">Montenegro</div>
            <div className="program-content">
              The Montenegro Citizenship by Investment Program was concluded on
              31 December 2022. Contact us to find the best alternative
              citizenship for you and your family.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={north} alt="" />
            <div className="program-name">North Macedonia</div>
            <div className="program-content">
              North Macedonia offers foreign nationals the opportunity to
              acquire citizenship of this upper-middle income country in
              Southeastern Europe, for an investment of EUR 200,000.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={kitts} alt="" />
            <div className="program-name">St. Kitts and Nevis</div>
            <div className="program-content">
              St. Kitts and Nevis has one of the strongest passports among all
              the Caribbean citizenship programs. A donation of USD 250,000 is
              required.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={luci} alt="" />
            <div className="program-name">St. Lucia</div>
            <div className="program-content">
              The St. Lucia Citizenship by Investment Program offers a real
              estate development option and visa-free access to over 140
              destinations. A donation of USD 100,000 is required.
            </div>
            <button>Know More</button>
          </div>
        </div>

        <div className="program-card">
          <div className="program-graphics">
            <img src={turkey} alt="" />
            <div className="program-name">Türkiye</div>
            <div className="program-content">
              The Türkiye Citizenship by Investment Program provides citizenship
              of a country with links to both Asia and Europe and access to the
              markets in both regions.
            </div>
            <button>Know More</button>
          </div>
        </div>
      </div>
      <div className="footerNew">
        <div>
          © Copyright Westbay Global Private Limited 2024. All Rights Reserved.
        </div>

        <div>About us | Privacy Policy</div>
      </div>
    </div>
  );
};

export default About;
