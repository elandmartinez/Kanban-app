import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTask, Task } from "../../appState/slices/taskSlice"
import { ReactComponent as dropdownArrow } from "../../assets/icons/dropdown-arrow.svg"
import Icon from "./Icon"

interface TaskSelectStageProps {
  stages: string[] | undefined,
  taskData: Task | undefined,
  shouldUpdateStateOnChange: boolean,
  temporaryStageState: String | undefined,
  setTemporaryStage: Function | undefined,
}

export default function DropdownSelector ({ stages, taskData, shouldUpdateStateOnChange, setTemporaryStage, temporaryStageState}: TaskSelectStageProps) {
  const [showStages, setShowStages] = useState(false)
  const dispatch = useDispatch()

  console.log({stages, taskData, shouldUpdateStateOnChange})

  function udpdateTaksStage (taskId: number | undefined, newStage: string) {
    if(taskData){
      console.log("entered update task stage")
      const newTaskData = {
        ...taskData,
        stage: newStage
      }
      if(shouldUpdateStateOnChange) {
        dispatch(editTask({id: taskData?.id, newTask: newTaskData}))
      }
      if(setTemporaryStage) setTemporaryStage(newStage)
      setShowStages(false)
    } else {
      throw Error("task data is undefined")
    }
  }

  return (
    <div className="relative text-[0.85rem] text-secondaryTextColor font-semibold flex items-center">
      <div
        className="z-20 relative w-full h-10 rounded-md border-[0.5px] flex justify-between items-center text-start border-secondaryTextColor bg-background px-3 transition-all duration-100 hover:bg-backgroundSemi active:bg-background"
        onClick={(e) => {
          e.preventDefault()
          setShowStages(!showStages)
        }}
      >
        <p>{temporaryStageState || taskData?.stage}</p>
        <Icon SvgComponent={dropdownArrow} classname="w-5 h-5 absolute right-4 z-20" />
      </div>
      <div className={`${showStages ? "h-[155px] pt-[0px]" : "h-0 p-0"} z-10 flex flex-col transition-all duration-200 absolute w-full max-h-[155px] overflow-y-auto left-0 top-[30px] rounded-b-xl`}>
          {
            stages?.map((stage, index) => {
              const islastStage = index === stages.length-1
              const isFirstStage = index === 0
              return (
                <div
                  key={index}
                  className={`px-2 py-3 bg-backgroundSemi hover:bg-mainPurple hover:text-white ${islastStage ? "rounded-b-xl" : ""} ${isFirstStage ? "pt-[25px]": ""}`}
                  onClick={() => udpdateTaksStage(taskData?.id, stage)}
                >
                  <p>{stage}</p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}