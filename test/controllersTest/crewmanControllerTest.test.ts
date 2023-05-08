import { CrewmanServices } from "../../src/service/crewmanService";
import { Request, Response } from "express";
import { CrewmanController } from "../../src/controllers/crewmanController";
import crewmanMockedData from "../mockedData/crewmanData";

jest.mock("../../src/service/crewmanService");

const CrewmanServiceMock = CrewmanServices as jest.Mock<CrewmanServices>;

describe("CrewmanServices tests", () => {
  let crewmanServiceMock: jest.Mocked<CrewmanServices>;
  let crewmanController: CrewmanController;

  beforeEach(() => {
    crewmanServiceMock = new CrewmanServiceMock() as jest.Mocked<CrewmanServices>;
    crewmanController = new CrewmanController(crewmanServiceMock);
  });

  test("Should return a list of crewmans", async () => {
    crewmanServiceMock.getAll.mockResolvedValue(crewmanMockedData.crewmanData);

    const crewmans = await crewmanController.getAll(
      {} as Request,
      { json: () => {} } as Response
    );
    expect(crewmanServiceMock.getAll).toHaveBeenCalledTimes(1);
    expect(crewmans).toEqual(crewmanMockedData.crewmanData);
  });

  test("Should return one crewman by it's id", async () => {
    const crewmanId = "2";
    const request = { params: { id: crewmanId } } as Request<{ id: string }>;

    crewmanServiceMock.get.mockResolvedValue(crewmanMockedData.crewman2);
    const crewman = await crewmanController.get(request, {
      json: () => {},
    } as Response);
    expect(crewmanServiceMock.get).toHaveBeenCalledTimes(1);

    expect(crewmanServiceMock.get).toHaveBeenCalledWith(parseInt(crewmanId));
    expect(crewman).toEqual(crewmanMockedData.crewman2);
  });

  test("Should create a crewman", async () => {
    const request = { body: crewmanMockedData.crewman1 } as Request;

    crewmanServiceMock.create.mockResolvedValue(crewmanMockedData.crewman1);
    const crewman = await crewmanController.create(request, {
      json: () => {},
    } as Response);
    expect(crewmanServiceMock.create).toHaveBeenCalledTimes(1);

    expect(crewmanServiceMock.create).toHaveBeenCalledWith(
      crewmanMockedData.crewman1
    );
    expect(crewman).toEqual(crewmanMockedData.crewman1);
  });

  test("Should update a crewman", async () => {
    const crewmanId = "2";
    const request = {
      params: {
        id: crewmanId,
      },
      body: crewmanMockedData.crewman2,
    } as Request<{ id: string }>;

    crewmanServiceMock.get.mockResolvedValue(crewmanMockedData.crewman2);

    crewmanServiceMock.update.mockResolvedValue();
    const crewman = await crewmanController.update(request, {
      json: () => {},
    } as Response);

    expect(crewmanServiceMock.update).toHaveBeenCalledTimes(1);
    expect(crewmanServiceMock.update).toHaveBeenCalledWith(
      parseInt(crewmanId),
      crewmanMockedData.crewman2
    );
    expect(crewmanServiceMock.update).toHaveReturned();
    expect(crewman).toBeUndefined();
  });

  test("Should delete a crewman", async () => {
    const crewmanId = "2";
    const request = {
      params: {
        id: crewmanId,
      },
    } as Request<{ id: string }>;
    crewmanServiceMock.get.mockResolvedValue(crewmanMockedData.crewman2);

    crewmanServiceMock.delete.mockResolvedValue();
    const crewman = await crewmanController.delete(request, {
      json: () => {},
    } as Response);

    expect(crewmanServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(crewmanServiceMock.delete).toHaveBeenCalledWith(parseInt(crewmanId));
    expect(crewmanServiceMock.delete).toHaveReturned();
    expect(crewman).toBeUndefined();
  });
});
