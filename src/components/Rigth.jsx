import { Box } from "./Box";
import { StateCF } from "./StateCF";

export function Rigth(){
    return(
        < div className='bg-[#100E1D] w-full lg:w-3/4 h-full lg:h-screen overflow-y-auto py-5 px-20 lg:px-20' >

          <StateCF />

          <p className='text-[#E7E7EB] pt-8 text-[24px]'>Today’s Highlights</p>
          {/* inicio de cajas */}
          <Box/>
          <p className='text-[14px] text-center font-[Montserrat] text-[#A09FB1] pt-3'>created by BorisTorres - devChallenges.io</p>
        </div >
    )
}