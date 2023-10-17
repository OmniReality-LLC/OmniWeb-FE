'use client'
import Spacer from '@/components/shared/PageSpacer/component';
import styles from './styles.module.css';
import Button from '@/components/shared/Buttons/component'
import GoogleMap from '@/components/shared/GoogleMap/component';
import ContactBanner from '../ContactBanner/component';
import { useState } from 'react';
import TextScrambler from '@/components/shared/TextScramble/component';

export default function InputContainer() {

  const [dropDownSelected, setDropDownSelected] = useState<string | null>(null);
  const [enableDropDownWarning, setEnableDropDownWarning] = useState<boolean>(false);
  const [submissionProcessing, setSubmissionProcessing] = useState<boolean>(false);
  const [submissionOverlayText, setSubmissionOverlayText] = useState<string>("Sending...");
  const [sucess, setSucess] = useState<boolean>(false);

  async function handleSubmit(event: any) {
    event.preventDefault();

    if (dropDownSelected === undefined) {
      setEnableDropDownWarning(true);
      return;
    }

    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const companyName = form.cname.value;
    const interests = dropDownSelected;  // Assuming selected is the chosen dropdown value
    const description = form.description.value;

    const payload = {
      email,
      name,
      companyName,
      interests,
      description,
    };

    try {
      setSubmissionOverlayText('Sending...');
      setSubmissionProcessing(true);
      const response = await fetch('/api/emailApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      MessageSent(form);

    } catch (error) {
      MessageFailedToSend(form);
    }
  };

  function MessageSent(form: any) {
    setSucess(true);
    setSubmissionOverlayText('Message Sent');
    setTimeout(() => {
      ResetForm(form);
    }, 8000); // Wait for 3 seconds
  }


  function MessageFailedToSend(form: any) {
    setSubmissionOverlayText('Message Failed to Send');
    setTimeout(() => {
      ResetForm(form);
    }, 8000); // Wait for 3 seconds
  }

  function ResetForm(form: any) {
    form.reset();

    setDropDownSelected(null);
    setEnableDropDownWarning(false);
    setSubmissionProcessing(false);
    setSubmissionOverlayText("Sending...");
    setSucess(false);
  }


  const setDropDownSelectedState = ((selectedItem: string) => {
    console.log('drop down selected: ' + selectedItem);
    setDropDownSelected(selectedItem);
  });


  const getSetWord = (() => {

    return dropDownSelected;


  })

  return (
    <div className={styles.inputMainContainer}>
      <ContactBanner className={styles.contactBanner} bannerClassName={styles.bannerClass} />
      <Spacer height='25px' />
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <div className={styles.inputFormMain}>
          <div className={styles.formContent}>
            {submissionProcessing &&
              <div className={styles.overlay}>
                <div className={sucess === false ? styles.loader : `${styles.loader} ${styles.success}`}></div>
                <div className={`${styles.overlayText} ${styles.interMono}`}><TextScrambler word={submissionOverlayText} charRevealDelay={-1} /></div>
              </div>
            }

            <div className={styles.inputTopContainer}>
              <div className={styles.subContainer} id='SubNameEmail'>
                <div className={styles.input} id='NameInput'>
                  <label htmlFor="name">
                    Name <RequiredAstrix />
                  </label>
                  <input type="text" id="name" name="name" required placeholder="Enter your name" />
                </div>
                <Spacer height='25px' />
                <div className={styles.input} id='Email'>
                  <label htmlFor="email">Email <RequiredAstrix /></label>
                  <input type="email" id="email" name="email" required placeholder="Enter your email" />
                </div>
              </div>
              <Spacer width='25px' height='25px' />
              <div className={styles.subContainer} id='SubCompanyInterests'>
                <div className={styles.input} id='CompanyName'>
                  <label htmlFor="cname">Company name</label>
                  <input type="text" id="cname" name="cname" placeholder="Enter your company name" />
                </div>
                <Spacer height='25px' />
                <div className={styles.inputDropDown} id='Interests' >
                  <label htmlFor="interests" >Interests<RequiredAstrix /></label>
                  <DropDown isSet={setDropDownSelectedState} displayWarningLabel={enableDropDownWarning} getSetWord={getSetWord} />
                </div>
              </div>
            </div>
            <Spacer height='25px' />
            <div className={styles.inputBottomContainer}>
              <div className={styles.inputDescription} id='Description'>
                <label htmlFor="description">Description <RequiredAstrix /></label>
                <textarea id="description" name="description" placeholder="Describe your inquiry" required></textarea>
              </div>
            </div>
            <Spacer height='25px' />
          </div>
          <Spacer width='25px' height='0' />

          <div className={styles.mapContainer}>
            <GoogleMap googleAddress={'Modesto CA'} />
            <Spacer height='25px' />
          </div>
        </div>
        <Button
          text={'Submit'}
          type='submit'
          marginL='0'
          marginB='25px'
          bgColor='transparent'
          className={submissionProcessing === true ? styles.buttonCursorInactive : ''}
        />
      </form>
    </div>
  );
}

interface DropDownInterface {
  isSet: (selectedItem: string) => void;
  getSetWord: () => string | null;
  displayWarningLabel: boolean;

}

function DropDown(props: DropDownInterface) {

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);


  const dataList = [
    'Website Plans',
    'Hosting & Maintenance',
    'Graphic Design Services',
    'Other'
  ]

  const arrowSVG = <svg xmlns="http://www.w3.org/2000/svg" width="23" height="13" viewBox="0 0 23 13" fill="none">
    <path d="M21.8281 11.7617L11.8281 1.76172L1.82812 11.7617" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;

  const dropDownClick = (() => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
  })

  const listItemClick = ((dataSelected: string, index: number) => {
    props.isSet(dataSelected);
    setSelectedIndex(index);
  })

  return (

    <>
      <div className={styles.dropDownMainContainer}>
        <div className={`${styles.dropDownMain} ${isExpanded == true && styles.dropDownMainClicked}`} onClick={dropDownClick} >
          <div className={styles.dropDownTopContainer}>
            <h1 className={styles.selectedText}>
              {props.getSetWord() !== null ?
                <TextScrambler
                  word={props.getSetWord() || 'Default Text'}
                  className={`${styles.gradientText} ${styles.interMono}`}
                  charRevealDelay={-1}
                />
                : "-Select Option-"}
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="13" viewBox="0 0 23 13" fill="none" className={`${styles.arrowSVG} ${isExpanded ? styles.flipArrow : ''}`}>
              <path d="M21.8281 11.7617L11.8281 1.76172L1.82812 11.7617" stroke="#D9D9D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </div>
          <div className={`${styles.dropDownBottomContainer} ${isExpanded && styles.dropDownExpand}`}>
            <ul className={styles.dropDownItems}>
              {dataList.map((myData, index) =>
                <li key={myData} className={`${styles.dropDownItem} ${selectedIndex === index ? styles.slectedDropDownItem : ''}`} onClick={() => listItemClick(myData, index)}>{myData}</li>
              )}
            </ul>
          </div>
        </div>

      </div>

      {props.displayWarningLabel && <h1 className={styles.warningLabel} >{!props.isSet && "Please select an interest"}</h1>}
    </>
  )
}

function RequiredAstrix() {

  return (
    <p className={styles.astrixMain}>
      *
    </p>
  );
}
