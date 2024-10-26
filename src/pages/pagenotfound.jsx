import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const Error404 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f5d7bd] via-[#d2a87d] to-[#be986d] flex items-center justify-center p-[32px]">
            <div className="max-w-[720px] mx-auto text-center space-y-[48px] bg-[#f5d7bd]/[0.85] backdrop-blur-[8px] rounded-[24px] p-[48px] shadow-[0_8px_32px_rgba(108,82,55,0.15)]">
                {/* Large 404 Display */}
                <div className="relative">
                    <h1 className="text-[168px] font-[800] text-[#be986d] leading-[1] select-none">404</h1>
                    <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] text-[32px] font-[500] text-[#6c5237]">
                        Page Not Found
                    </p>
                </div>

                {/* Message */}
                <div className="space-y-[24px]">
                    <p className="text-[24px] text-[#6c5237] font-[500]">
                        Oops! The page you're looking for seems to have wandered off.
                    </p>
                    <p className="text-[18px] text-[#be986d]">
                        Don't worry, sometimes even URLs need a vacation.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-[16px] justify-center items-center mt-[48px]">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-[8px] px-[24px] py-[12px] bg-[#6c5237] text-white rounded-[8px] hover:bg-[#be986d] transition-colors duration-[300ms] text-[16px] font-[500]"
                    >
                        <ArrowLeft className="w-[18px] h-[18px]" />
                        Go Back
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-[8px] px-[24px] py-[12px] border-[2px] border-[#6c5237] text-[#6c5237] rounded-[8px] hover:bg-[#f5d7bd] transition-colors duration-[300ms] text-[16px] font-[500]"
                    >
                        <Home className="w-[18px] h-[18px]" />
                        Return Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error404;
