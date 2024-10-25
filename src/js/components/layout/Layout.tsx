import { useAuth } from "@/js/hooks/use-auth"
import { Avatar, Box, Button, Heading, HStack } from "@chakra-ui/react"
import { PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
  title: string
}

export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
  const { isLoggedIn, isLoginCheckDone, logout, userName } = useAuth()
  const navigate = useNavigate()

  // ログアウト中にアクセスされたら、/loginに遷移させる
  useEffect(() => {
    if (isLoginCheckDone && !isLoggedIn) {
      navigate("/login")
    }
  }, [isLoginCheckDone, isLoggedIn])

  if (!isLoginCheckDone || !isLoggedIn) return null

  return (
    <Box as="main" w="720px" mx="auto" mt="20">
      <HStack as="header" justifyContent="space-between" spacing="4">
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        <HStack justifyContent="end" spacing="4">
          <HStack spacing="4">
            <Avatar bg="teal.500" size="xs" />
            <Box>{userName}</Box>
          </HStack>
          <Box>
            <Button onClick={logout} colorScheme="red" size="xs">
              ログアウト
            </Button>
          </Box>
        </HStack>
      </HStack>
      {children}
    </Box>
  )
}
