import React from 'react';
import '../css/serviceDetailsStyle.css'
import ServiceDetails from './ServiceDetails';

export default function Service() {
  return(
    <div>

        <div className="service-main">
            <h1>Our Services</h1>  
            <hr className="dotted-hr"/>
            <div className="service">
                <ServiceDetails icon = {'/images/teethWhitenning.jpg'} title={"Calculus Plaque, Stain, Stone"}
                desc = {"Calculus and Plaque are two terms that both relate to bacteria growth on our teeth and they are so detrimental."}
                />
                <ServiceDetails icon = {'/images/home.jpg'} title={"Gum Bleeding"}
                desc = {"Bleeding gums are a sign of gingivitis, or inflammation of your gums. It's a common and mild form of gum disease."}
                />
                <ServiceDetails icon = {'/images/dentalImplants.jpg'} title={"Foul Odor"}
                desc = {"Do you feel foul smelling on your mouth? To get rid of it contact with the specialist of Oro Fresh Dental Care"}
                />
            </div>
        </div>
        <div className="service-main">
            <h1>Our Treatments</h1>  
            <hr className="dotted-hr"/>
            
            <div className="service">
                <ServiceDetails icon = {'/images/dental1.jpg'} title={"Resoration"}
                desc = {"Restorations are procedures that your dentist uses tofix your missing teeth or missing parts of your teeth."}
                />
                <ServiceDetails icon = {'/images/teethWhitenning.jpg'} title={"Conservatives"}
                desc = {"Conservative dentistry refers to a dentistry branch whose goal is to conserve the teeth in the mouth."}
                />
                <ServiceDetails icon = {'/images/dental2.jpg'} title={"Endodontics"}
                desc = {"Dental endodontic treatment, or root canal treatment, treats the soft pulp tissue inside the tooth."}
                />
            </div>
            <div className="service">
                <ServiceDetails icon = {'/images/missingTeeth.jpg'} title={"Prosthodontics"}
                desc = {"Dental Prosthodontic is a complex Dental treatment that includes resoration or dental implants and jaw disorder."}
                />
                <ServiceDetails icon = {'/images/home.jpg'} title={"Orthodontics"}
                desc = {"It is treatment of correcting existing condition like bad bite or large spaces between the teeth and jaw irregularities."}
                />
                <ServiceDetails icon = {'/images/about.jpg'} title={"Surgery"}
                desc = {"Dental surgery is any of a number of medical procedures that involve artificially modifying teeth, gum and jaw bones"}
                />
            </div>
            <div className="service">
                <ServiceDetails icon = {'/images/teethWhitenning.jpg'} title={"Periodontics"}
                desc = {"Periodontic is a special dental treatment where treats issues that affect your gums and the bones in your mouth."}
                />
                <ServiceDetails icon = {'/images/missingTeeth.jpg'} title={"Prevention"}
                desc = {"It's a combination of regular dental check-ups along with developing good habits like brushing and flossing."}
                />
                <ServiceDetails icon = {'/images/dentalImplants.jpg'} title={"Medication"}
                desc = {"We provide the best medication to control pain, prevent infection, and treat fungal and bacterial infections."}
                />
            </div>
        </div>
    </div>
  );
}
