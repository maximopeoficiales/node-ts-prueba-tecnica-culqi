import { config } from "../../../config";
import { log } from "./log";

describe("Test log function", () => {
  // Tests that the log function logs the provided arguments to the console when config.APP_ENV is "dev". 
  it("test_log_function_with_dev_environment", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    config.APP_ENV = "dev";
    log("test");
    expect(consoleSpy).toHaveBeenCalledWith("test");
    consoleSpy.mockRestore();
  });

  // Tests that the log function does not log the provided arguments to the console when config.APP_ENV is not "dev". 
  it("test_log_function_with_non_dev_environment", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    config.APP_ENV = "prod";
    log("test");
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  // Tests that the log function takes any number of arguments and logs them to the console. 
  it("test_log_function_with_arguments", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    config.APP_ENV = "dev";
    log("test", 123, true);
    expect(consoleSpy).toHaveBeenCalledWith("test", 123, true);
    consoleSpy.mockRestore();
  });

  // Tests that the log function logs null arguments to the console. 
  it("test_log_function_with_null_arguments", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    config.APP_ENV = "dev";
    log(null);
    expect(consoleSpy).toHaveBeenCalledWith(null);
    consoleSpy.mockRestore();
  });

  // Tests that the log function logs undefined arguments to the console. 
  it("test_log_function_with_undefined_arguments", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    config.APP_ENV = "dev";
    log(undefined);
    expect(consoleSpy).toHaveBeenCalledWith(undefined);
    consoleSpy.mockRestore();
  });
});
