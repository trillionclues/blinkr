import React, { forwardRef, ReactNode, useMemo } from 'react'
import BottomSheet, { BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import { useThemeColor } from './Themed'

interface CustomBottomSheetProps {
  children: ReactNode
  backdropComponent?: React.FC<BottomSheetBackdropProps>
  snapPoints?: string[]
}

type Ref = BottomSheetMethods

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>(
  ({ children, backdropComponent, snapPoints, ...rest }, ref) => {
    // const snapPoints = useMemo(() => ['40%'], [])
    const backgroundColor = useThemeColor(
      { light: '#fff', dark: '#222' },
      'background'
    )

    return (
      <BottomSheet
        enablePanDownToClose={true}
        ref={ref}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ display: 'none' }}
        backgroundStyle={{
          backgroundColor,
        }}
        backdropComponent={backdropComponent}
        {...rest}
      >
        {children}
      </BottomSheet>
    )
  }
)

export default CustomBottomSheet
