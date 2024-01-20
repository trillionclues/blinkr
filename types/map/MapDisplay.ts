import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet'
import { UserMarkerProps } from '../user/UserData'

export interface MapDisplayProps {
  selectedUser: UserMarkerProps
  // userDetailsBottomSheetRef: React.RefObject<BottomSheet>
  userArray: UserMarkerProps[]
  onUserSelect: (user: UserMarkerProps) => void
}
