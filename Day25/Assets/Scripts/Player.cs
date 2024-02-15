using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    // Global variables
    private Vector2 targetPosition;
    public float yIncrement;
    public float speed;
    public float maxHeight;
    public float minHeight;
    public float health;

    // Update is called once per frame
    void Update()
    {
        // Update player position
        transform.position = Vector2.MoveTowards(transform.position, targetPosition, speed * Time.deltaTime);

        // Move character
        if ((Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.W)) && transform.position.y < maxHeight) {

            targetPosition = new Vector2(transform.position.x, transform.position.y + yIncrement);

        } else if ((Input.GetKeyDown(KeyCode.DownArrow) || Input.GetKeyDown(KeyCode.S)) && transform.position.y > minHeight)
        {
            targetPosition = new Vector2(transform.position.x, transform.position.y - yIncrement);
        }
    }
}
