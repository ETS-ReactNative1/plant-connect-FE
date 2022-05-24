import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable";

function ConversationPage({ loggedInUser }) {
  const [messages, setMessages] = useState([])
  const params = useParams()
}