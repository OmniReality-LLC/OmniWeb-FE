import { Html } from "@react-email/html";
import { Head } from '@react-email/head';
import { Link } from '@react-email/link';
import { Container } from '@react-email/container'
import {Body} from '@react-email/body'
import {Section} from '@react-email/section'
import {Text} from '@react-email/text'
import {Hr} from '@react-email/hr'




export default function TestingComp() {
  return (
    <Html lang="en">
      <Head>
        <title>OmniReality Email</title>
      </Head>
      <Body>
        <Container style={{
          display: 'flex',
          position: 'relative',
          width: 'auto',
          height: 'auto',
          minHeight:'555px',
          zIndex: 50,
          flexDirection: 'column',
          alignItems: 'center',
          background: 'url(https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1694550212/Omni%20Website/Email%20Templates/Information_Background_1_fyt6da.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <img src='https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1694550173/Omni%20Website/Email%20Templates/TopBanner_1_xyidwz.png' alt="OmniReality Banner" style={{}}/>
          <Section style={{ // If Section doesn't exist, you can use another Container or a div
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            height:'100%'
          }}>
            <Text style={{ // Text might need to be defined by you or replaced with a div if it doesn't exist in the library
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              height:'fit-content',
              margin:'0px',
              marginTop:'-25px'



            }}>Thank You For Connecting With OmniReality LLC!</Text>
            <Hr style={{ // Hr might need to be defined by you

              height: '2px',
              background: 'linear-gradient(to right, rgba(62, 220, 255, 0), #3EDCFF, rgba(62, 220, 255, 0))',
              margin:'0px'
            }} />
            <Text style={{
              textAlign: 'center',
              color: '#FFF',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '12px',
              width: '344px',

              marginTop:'0px'

            }}>A member of our team will get back to you within 24-48 business hours to discuss the next steps.</Text>
          </Section>

          <Link href='https://www.omnireality.us' style={{
            color: '#3EDCFF',
            cursor: 'pointer',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            textShadow: '0px 0px 8px rgba(62, 220, 255, 0.75)',
            marginBottom: '10px',
            textDecoration: 'none',
            width: '100%',
            display: 'inline-block'
          }}>OmniReality LLC © 2023</Link>
        </Container>
      </Body>
    </Html>
  );
}
