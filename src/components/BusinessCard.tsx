import {
  Mail,
  Phone,
  MapPin,
  Download,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../assets/logo1.jpg";
// import textureImage from "../assets/texture.jpg";
import textureImage1 from "../assets/image3.png";

const BusinessCard = () => {
  // Colors
  const colors = {
    background: "hsl(0, 0%, 10%)",
    foreground: "hsl(0, 0%, 98%)",
    card: "hsl(0, 0%, 12%)",
    primary: "hsl(0, 0%, 90%)",
    primaryForeground: "hsl(0, 0%, 10%)",
    mutedForeground: "hsl(0, 0%, 60%)",
    border: "hsl(0, 0%, 25%)",
  };

  // Animation keyframes
  const animations = `
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 20px hsla(0, 0%, 60%, 0.3); }
      50% { box-shadow: 0 0 40px hsla(0, 0%, 60%, 0.6); }
    }
    @keyframes fade-in {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes scale-in {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;

  const handleDownloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Fazlullah Mohammed
TITLE:Sales Specialist
EMAIL:salesf@rico-intl.com
TEL:+966 558413822
ADR:;;Dammam ;Saudi Arabia
URL:https://rico-intl.com
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "alex-johnson.vcf";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <style>{animations}</style>
      <div
        style={{
          minHeight: "100vh",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center", // Only horizontal centering now
          padding: "1rem",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden",
          overscrollBehavior: "none",
          background: "#1a1a1a",
        }}
      >
        {/* Animated background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
            background: `linear-gradient(135deg, ${colors.card}, hsl(0, 0%, 15%))`,
            backgroundSize: "200% 200%",
            animation: "gradient-shift 8s ease infinite",
          }}
        />

        {/* Floating orbs */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "5rem",
            width: "18rem",
            height: "18rem",
            background: "hsla(0, 0%, 90%, 0.2)",
            borderRadius: "9999px",
            filter: "blur(60px)",
            animation: "float 3s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            right: "5rem",
            width: "24rem",
            height: "24rem",
            background: "hsla(0, 0%, 30%, 0.2)",
            borderRadius: "9999px",
            filter: "blur(60px)",
            animation: "float 3s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />

        {/* Business Card */}
        {/* Business Card */}
        <div
          style={{
            position: "relative",
            width: "100%",
            // height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            animation: "scale-in 0.5s ease-out",
          }}
        >
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${textureImage1})`,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1.5rem",
              padding: "2rem 1rem", // top-bottom 2rem, left-right 1rem
              margin: "1rem 0", // adds space on top/bottom
              boxShadow: "0 20px 60px -15px hsla(0, 0%, 0%, 0.5)",
              animation: "glow-pulse 2s ease-in-out infinite",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",

              // justifyContent: "center",
            }}
          >
            {/* Profile Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "5px",
                animation: "fade-in 0.6s ease-out",
              }}
            >
              <div style={{ position: "relative", marginBottom: "1rem" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${colors.primary}, hsl(0, 0%, 30%))`,
                    borderRadius: "9999px",
                    filter: "blur(8px)",
                    opacity: 0.6,
                  }}
                />
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{
                    position: "relative",
                    width: "8rem",
                    height: "8rem",
                    borderRadius: "9999px",
                    objectFit: "cover",
                    border: "4px solid hsla(0, 0%, 100%, 0.2)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              <h1
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                  background: `linear-gradient(135deg, ${colors.foreground}, hsla(0, 0%, 98%, 0.8))`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: colors.foreground,
                }}
              >
                Fazlullah Mohammed
              </h1>
              <p
                style={{
                  color: colors.mutedForeground,
                  fontSize: "1.125rem",
                }}
              >
                Sales Specialist
              </p>
              <p
                style={{
                  color: colors.mutedForeground,
                  fontSize: "12px",
                  marginBottom: "1rem",
                }}
              >
                Reliable International Company
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: colors.mutedForeground,
                  marginBottom: "1.5rem",
                }}
              >
                <MapPin style={{ width: "1rem", height: "1rem" }} />
                <span>Damam, Saudi Arabia</span>
              </div>
            </div>

            {/* Contact Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                animation: "fade-in 0.6s ease-out 0.2s backwards",
              }}
            >
              <a
                href="mailto:salesf@rico-intl.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    background: `hsla(0, 0%, 90%, 0.2)`,
                    transition: "background 0.3s",
                  }}
                >
                  <Mail
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: colors.primary,
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.875rem" }}>
                  salesf@rico-intl.com
                </span>
              </a>

              <a
                href="tel:+966558413822"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    background: `hsla(0, 0%, 90%, 0.2)`,
                    transition: "background 0.3s",
                  }}
                >
                  <Phone
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: colors.primary,
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.875rem" }}>+966 558413822</span>
              </a>

              <a
                // href="tel:+966530649135"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  textDecoration: "none",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    background: `hsla(0, 0%, 90%, 0.2)`,
                    transition: "background 0.3s",
                  }}
                >
                  <Navigation
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: colors.primary,
                    }}
                  />
                </div>
                <span style={{ fontSize: "0.875rem" }}>
                  Dammam, Saudi Arabia
                </span>
              </a>
            </div>

            {/* Quick Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
                animation: "fade-in 0.6s ease-out 0.4s backwards",
              }}
            >
              <a
                href="mailto:salesf@rico-intl.com  "
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform =
                    "scale(1.1) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              >
                <Mail style={{ width: "1.25rem", height: "1.25rem" }} />
              </a>
              <a
                href="https://maps.app.goo.gl/hUayrgfRpK23ubqXA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform =
                    "scale(1.1) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              >
                <MapPin style={{ width: "1.25rem", height: "1.25rem" }} />
              </a>
              <a
                href="https://wa.me/966558413822"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  background: "hsla(0, 0%, 100%, 0.05)",
                  border: "1px solid hsla(0, 0%, 100%, 0.1)",
                  transition: "all 0.3s",
                  color: colors.foreground,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.1)";
                  e.currentTarget.style.transform =
                    "scale(1.1) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "hsla(0, 0%, 100%, 0.05)";
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                }}
              >
                <MessageCircle
                  style={{ width: "1.25rem", height: "1.25rem" }}
                />
              </a>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                animation: "fade-in 0.6s ease-out 0.6s backwards",
              }}
            >
              <Button
                variant="gradient"
                style={{ flex: 1 }}
                onClick={handleDownloadVCard}
              >
                <Download
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.5rem",
                  }}
                />
                Save Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
