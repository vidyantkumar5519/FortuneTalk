import React from "react";
import { Link } from "react-router-dom";
import workshop from "../../assets/icons/puja.png";
import profile from "../../assets/icons/profo.png";

const WorkShopCard = ({ displayName, language, workshop_image, profile_image, astro_id }) => {
    return (
        <>
            <div
                className="flex flex-col px-4 py-3 w-full mx-auto overflow-hidden rounded-lg border-[2px] border-[#F27806]"
                style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" }}
            >
                {/* Left Column: Image and Rating */}
                <div className=" flex flex-col  ">
                    <img
                        src={workshop_image ?? workshop}
                        alt={displayName}
                        className="w-full h-full"
                        style={{ borderRadius: "10px" }}
                    />
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                            <img
                                src={profile_image ?? profile}
                                style={{ width:'60px', height:'60px'}}
                            />
                            <div>
                                <p className="text-lg font-semibold" style={{
                                    fontFamily: "Inter",
                                    fontSize: "18px", // Reduced font size
                                    fontWeight: "600",
                                }}>Astro Disha</p>
                                <p className="text-sm text-[#F27806]" style={{
                                    fontFamily: "Inter",
                                    fontSize: "13px", // Reduced font size
                                    fontWeight: "600",
                                }}>Vedic Astrology</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                            <p className="text-sm text-[#000] font-semibold">16 June (Tuesday)</p>
                            <p className="text-sm text-[#000] font-semibold">11:30 am</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkShopCard;
