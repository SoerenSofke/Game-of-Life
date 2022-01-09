function setup() {
    createCanvas(400, 400).parent("p5Canvas");
}

function draw() {
    background(220);
    circle(mouseX, mouseY, 10)
}

math.import({
    rollUp: function (matrix) {
        height = matrix.size()[0]
        width = matrix.size()[1]

        row = matrix.subset(math.index(math.range(0, 1), math.range(0, width)))
        rest = matrix.subset(math.index(math.range(1, height), math.range(0, width)))        
        rolledUpMatrix = math.concat(rest, row, 0)

        return rolledUpMatrix
    }
  })

describe("Zero matrix of size 4x5", () => {    
    m = math.matrix([
        [1, 0, 0, 0, 0],
        [0, 2, 0, 0, 0],
        [0, 0, 3, 0, 0],
        [0, 0, 0, 4, 0]
    ])

    it("shall roll up the matrix", () => {
        expect(math.rollUp(m)).toEqual(
            math.matrix([                                
                [0, 2, 0, 0, 0],
                [0, 0, 3, 0, 0],
                [0, 0, 0, 4, 0],
                [1, 0, 0, 0, 0],
            ])
        )
    });

});

