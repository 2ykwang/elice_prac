def isParenthesisValid(s):
    if len(s)%2 !=0:
        return False
        
    st = []
    dict = {')': '(', 
            ']': '[', 
            '}': '{', 
            '>': '<'
    } 
    for bracket in s:
        if bracket not in dict:
            st.append(bracket)
        elif len(st)>0 and dict[bracket] == st[-1]:
            st.pop(-1)
        else:
            return False 
    return len(st)<1


def main():
    examples = ["({()})",
                "[]<>{}",
                ")(" "<]", "<(>)"]
    for example in examples:
        print(example, isParenthesisValid(example))


if __name__ == "__main__":
    main()
