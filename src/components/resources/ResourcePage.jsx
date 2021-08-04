import React from 'react'
import { Link } from 'react-router-dom'

const ResourcePage = () => {
    return (
        <section className="resources">
            <div className="detailsContainer">
            <p className="we-back-details">Welcome to We Back(ish) a place for you to get back into the world or stay virtual post-pandemic. In order to access events, you must login or create an account.</p>

            </div>
            <h1>COVID RESOURCES</h1>
            <div>
                <h3>Vaccine Sites</h3>
                <ul>
                    <Link to={{ pathname: "https://www.vaccines.gov"}} target="_blank" ><li>Find a Vaccine</li></Link>
                </ul>
            </div>
            <div>
                <h3>Vaccine Info</h3>
                <ul>
                    <Link to={{ pathname: "https://www.cdc.gov/vaccines/covid-19/reporting/vaccinefinder/about.html"}} target="_blank" ><li>CDC (Centers for Disease Control and Prevention)</li></Link>
                    <Link to={{ pathname: "https://www.hhs.gov/immunization/diseases/covid/index.html"}} target="_blank" ><li>U.S. Department of Health and Human Services</li></Link>
                </ul>
            </div>
            <div>
                <h3>Mental Health Resources and Other Assistance</h3>
                <ul>
                    <Link to={{ pathname: "https://whileathome.org/"}} target="_blank" ><li>While at Home (An extensive resource page)</li></Link>
                    <Link to={{ pathname: "https://www.health.harvard.edu/coping-with-coronavirus"}} target="_blank" ><li>Coping with Coronavirus (Harvard)</li></Link>
                    <Link to={{ pathname: "https://www.aarp.org/health/conditions-treatments/info-2020/coronavirus-social-isolation-loneliness.html"}} target="_blank" ><li>Dealing with Social Isolation (AARP)</li></Link>
                </ul>
            </div>
                <h1>SOCIAL ANXIETY RESOURCES</h1>
                <h3>Articles on Re-Socializing</h3>
                <ul>
                    <Link to={{ pathname: "https://www.bbc.com/worklife/article/20210218-why-we-may-have-to-re-learn-to-socialise"}} target="_blank" ><li>Why We May Have to Re-learn to Socialise (BBC)</li></Link>
                    <Link to={{ pathname: "https://www.npr.org/2021/04/04/983855924/do-we-even-know-how-to-socialize-anymore"}} target="_blank" ><li>Do We Even Know How to Socialize Anymore? (NPR)</li></Link>
                </ul>
                <h3>Activities to Relieve Anxiety</h3>
                <ul>
                    <Link to={{ pathname: "https://www.mindful.org/how-to-meditate/"}} target="_blank" ><li>How to Meditate (Mindful)</li></Link>
                    <Link to={{ pathname: "https://www.healthline.com/health/mental-health/types-of-meditation"}} target="_blank" ><li>9 Types of Meditation (healthline)</li></Link>
                    <Link to={{ pathname: "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety"}} target="_blank" ><li>How to Stop Feeling Anxious Right Now (WedMD)</li></Link>
                </ul>
        </section>
    )
}

export default ResourcePage
