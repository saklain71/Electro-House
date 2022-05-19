import React from 'react';

const ContactForm = () => {
    return (
        <div className='container  '>
            <h1 className='text-center mt-5'><u>Feel Free To Contact</u></h1>
            <form className='p-4 m-5 text-center'>

                <label className='mb-4' for="fname">First Name</label>
                <input   type="text" id="fname" name="firstname" placeholder="Your name.." /> <br />

                <label for="lname">Last Name</label>
                <input className='mb-4'  type="text" id="lname" name="lastname" placeholder="Your last name.." /> <br />
                <label for="lname">Phone </label>
                <input className='mb-4 ms-4'  type="number" id="lname" name="number" placeholder="Your last name.." /> <br />

                <label className='mb-4'  for="country">Country</label>
                <select className='mb-4'  id="country" name="country">
                    <option value="australia">Bangladesh</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select> <br />

                
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea> <br />

                <input  className='btn btn-info' type="submit" value="Submit"/>

            </form>

        </div>
    );
};

export default ContactForm;