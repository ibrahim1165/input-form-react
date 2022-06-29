import React from 'react';

const Location = () => {
    return (
        <div>
           
            <div className="mt-4 text-center text-3xl font-bold ">
                <h1>Allow us, to get your location so<br />
                    <p className="mt-4 text-center text-3xl font-bold ">we can set up map for you.</p>
                </h1>
            </div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <div class="card-body w-[400px] h-[280px] ">
                            <div class="form-control w-[328px] h-[56px]">
                                <label class="label">
                                    <span class="label-text">State</span>
                                </label>
                                <input type="text" placeholder="State" class="input input-bordered w-[328px] h-[27px]" />
                            </div>
                            <div class="form-control w-[328px] h-[56px]">
                                <label class="label">
                                    <span class="label-text">Country</span>
                                </label>
                                <input type="text" placeholder="Country" class="input input-bordered w-[328px] h-[27px]" />
                            </div>
                            <div class="form-control w-[328px] h-[56px]">
                                <label class="label">
                                    <span class="label-text">Pin Code</span>
                                </label>
                                <input type="text" placeholder="Pin Code" class="input input-bordered w-[328px] h-[27px]" />
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

export default Location;