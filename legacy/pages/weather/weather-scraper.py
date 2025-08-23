from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://www.cleardarksky.com/c/DomObBCkey.html")

# get page title
print("Page title is: " + driver.title)
print("Current day is: ")

# quitting browser
driver.quit