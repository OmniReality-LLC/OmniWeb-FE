export default function TestingComp() {
  return (
    <html>
      <head>
        <title>OmniReality Email</title>
      </head>
      <body>
        <div style={{
          position: 'relative',
          height: 'auto',
          width: '600px',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#191A1B',
          paddingBottom: '1rem',
        }}>
          <img src='/testFolder/TopBannerWithLogo.png' alt="OmniReality Banner" />
          <div style={{
            border: '1px solid #3EDCFF',
            background: 'radial-gradient(153.13% 50% at 50% 50%, #1A242F 0%, #161616 100%)',
            boxShadow: '0px 0px 80px 10px rgba(62, 220, 255, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10%',
            width: '73%',
            padding: '1rem',
          }}>
            <img src='/testFolder/Envelope.png' alt="Envelope Image" style={{
              marginTop: '-22.5%',
            }} />
            <h1 style={{
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              textShadow: '0px 0px 8px rgba(62, 220, 255, 0.75)',
            }}>Thank You for Connecting with OmniReality LLC!</h1>
            <div style={{
              width: '310px',
              height: '2px',
              background: 'linear-gradient(to right, rgba(62, 220, 255, 0), #3EDCFF, rgba(62, 220, 255, 0))',
              marginBottom: '1rem',
            }}></div>
            <p style={{
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '16px',
              textShadow: '0px 0px 8px rgba(62, 220, 255, 0.75)',
              width: '344px',
              height: 'auto',
              marginBottom: '1em',
            }}>A member of our team will get back to you within 24-48 business hours to discuss the next steps.</p>
          </div>
          <div style={{
            width: '310px',
            height: '2px',
            background: 'linear-gradient(to right, rgba(62, 220, 255, 0), #3EDCFF, rgba(62, 220, 255, 0))',
            margin: '1rem 0',
          }}></div>
          <a href='omnireality.us' style={{
            color: '#3EDCFF',
            cursor: 'pointer',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            textShadow: '0px 0px 8px rgba(62, 220, 255, 0.75)',
            margin: '1em 0',
            textDecoration: 'none',
          }}>OmniReality LLC © 2023</a>
        </div>
    </body>
      </html >
    );
}
