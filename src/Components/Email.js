import React from 'react';
import { useForm } from 'react-hook-form';

const Email = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onsubmit = data => {
    const url = `https://test.paplilabs.com/login_api/validateEmail/`;
       fetch(url, { 
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
       })
       .then(res=>res.json())
       .then(data =>{
        console.log(data);
        
       })
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold">Welcome!</h1>
        <p className="text-center mt-2 font-bold">Let’s get you started with a free Account.</p>
      </div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <div className="mt-4">
              <p className="text-sm px-2">We suggest using the email address that you use at work</p>
            </div>
      
              <div class="card-body w-[440px] h-[269px] mt-[-20px]">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: 'Email is Required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid Email'
                      }
                    })}
                    type="text" placeholder="email" class="input input-bordered w-[260px] h-[24px]" />
                  <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: 'Password is Required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}

                    type="password" placeholder="password" class="input input-bordered w-[260px] h-[24px]" required />
                  <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  </label>
                  <label class="label">
                    <p className="mx-2">it’s okay to send me emails about Novae Avenue</p>
                  </label>
                </div>
                
              </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={handleSubmit(onsubmit)} class="rounded-lg font-bold h-[45px] bg-accent text-black w-[441px]">Continue</button>
      </div>
    </div>
  );
};

export default Email;