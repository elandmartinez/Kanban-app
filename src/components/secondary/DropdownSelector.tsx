import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTask, Task } from "../../appState/slices/taskSlice"
import { ReactComponent as dropdownArrow } from "../../assets/icons/dropdown-arrow.svg"
import Icon from "./Icon"

interface TaskSelectStageProps {
  stages: string[] | undefined,
  taskData: Task | undefined,
  shouldUpdateStateOnChange: boolean,
  optionalSetStageStateFunc: Function | undefined,
}

export default function DropdownSelector ({ stages, taskData, shouldUpdateStateOnChange, optionalSetStageStateFunc}: TaskSelectStageProps) {
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
      if(shouldUpdateStateOnChange) dispatch(editTask({id: taskData?.id, newTask: newTaskData}))
      setShowStages(false)
    } else {
      throw Error("task data is undefined")
    }
  }

  return (
    <div className="text-[0.85rem] text-secondaryTextColor font-semibold">
      {/*
      <button
        className="z-20 relative w-full h-10 rounded-md border-[0.5px] flex justify-between items-center text-start border-secondaryTextColor bg-background px-3 transition-all duration-100 hover:bg-backgroundSemi active:bg-background"
        onClick={(e) => {
          e.preventDefault();
          setShowStages(!showStages)
        }}
      >
        {taskData?.stage}
        <Icon SvgComponent={dropdownArrow} classname="w-5 h-5" />
      </button>
      */}
      <label className="block text-sm text-mainTextColor font-semibold mb-1">Stage</label>
      <select
        value={taskData?.stage}
        onChange={(e) => {
          if(optionalSetStageStateFunc) optionalSetStageStateFunc(e.target.value)
        }}
        name="stage"
        className={`${showStages ? "h-[155px] pt-[0px]" : "h-0 p-0"} z-10 flex flex-col transition-all duration-200 absolute w-full max-h-[155px] overflow-y-auto left-0 top-[60px] rounded-b-xl text-secondaryTextColor`}
      >
          {
            stages?.map((stage, index) => {
              const islastStage = index === stages.length-1
              const isFirstStage = index === 0
              console.log({stage})

              return (
                <option
                  key={index}
                  value={stage}
                  className={`px-2 py-3 bg-backgroundSemi hover:bg-mainPurple hover:text-white ${islastStage ? "rounded-b-xl" : ""} ${isFirstStage ? "pt-[25px]": ""}`}
                  onClick={() => udpdateTaksStage(taskData?.id, stage)}
                >
                  {stage}
                </option>
              )
            })
          }
        </select>
    </div>
  )
}