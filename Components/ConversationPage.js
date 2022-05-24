import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable";

function ConversationPage({ loggedInUser }) {
  const [messages, setMessages] = useState([])
  const params = useParams()
  const cable = useRef()

  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer("ws://localhost:3000/cable")
    }
    
    const paramsToSend = {
      channel: "ConversationChannel",
      id: params.id
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
    const subscription = cable.subscriptions.create(paramsToSend, handlers)
    return function cleanup() {
      console.log("unsubbing from ", params.id);
      cable.current = null
      subscription.unsubscribe()
    }
  }, [params.id, messages])
}