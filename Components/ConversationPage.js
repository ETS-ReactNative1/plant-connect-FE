import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { createConsumer } from "@rails/actioncable"

function ConversationPage() {
  const [messages, setMessages] = useState([])
  const params = useParams()
  const cable = useRef()

  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer("ws://localhost:3000/cable")
    }
    
    const handlers = {
      received(data) {
        setMessages([...messages, data])
      },
      connected() {
        console.log("connected")
      },
      disconnected() {
        console.log("disconnected")
        cable.current = null
      }
    }

    const subscription = cable.subscriptions.create(handlers)
    return function cleanup() {
      cable.current = null
      subscription.unsubscribe()
    }
  }, [messages])
}