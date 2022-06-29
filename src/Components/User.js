import React from 'react';

const User = () => {
    return (
        <div>
            <div className="mt-4 text-center text-3xl font-bold ">
                <h1>Alright, let’s set this up! <br />
                    <p className="mt-4 text-center text-3xl font-bold ">Tell us a bit about youself.</p>
                </h1>
            </div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body w-[400px] h-[280px] ">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">First name</span>
                                </label>
                                <input type="text" placeholder="First Name" class="input input-bordered w-[328px] h-[27px]" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Last name</span>
                                </label>
                                <input type="text" placeholder="Last Name" class="input input-bordered w-[328px] h-[27px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-[]">
          <button class="rounded-lg font-bold h-[45px] bg-accent text-black w-[441px]">Continue</button>
          </div>
        </div>
    );
};

export default User;